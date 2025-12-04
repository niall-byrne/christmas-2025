import {
  AnswerDataType,
  AnswerResponseType,
} from "@/app/api/riddle/[slug]/types";
import { useEffect, useState } from "react";

export default function useRiddleChecker(personId: string) {
  const [checking, setChecking] = useState(false);

  const [guess, setGuess] = useState("");
  const [loading, setLoading] = useState(true);
  const [recipient, setRecipent] = useState("");
  const [riddleId, setRiddleId] = useState("");

  const guessAttempt = (answer: string, riddleId: string) => {
    setRiddleId(riddleId);
    setGuess(answer);
    setChecking(true);
  };

  const guessReset = () => {
    setGuess("");
    setRecipent("");
    setChecking(true);
  };

  const isLoading = () => {
    return guess && loading;
  };

  useEffect(() => {
    setChecking(false);
  }, []);

  useEffect(() => {
    async function postData() {
      if (riddleId) {
        try {
          const payload: AnswerDataType = {
            riddleId,
            answer: guess,
          };
          const response = await fetch("/api/riddle/" + personId, {
            method: "POST",
            body: JSON.stringify(payload),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result: AnswerResponseType = await response.json();
          setRecipent(result.for!);
        } catch {
          /* pass */
        } finally {
          setLoading(false);
        }
      }
    }

    if (guess && checking) {
      postData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guess, checking]);

  return {
    guess: {
      attempt: guessAttempt,
      reset: guessReset,
      value: guess,
    },
    isLoading,
    recipient,
  };
}
