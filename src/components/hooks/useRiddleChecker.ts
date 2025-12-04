import {
  AnswerDataType,
  AnswerResponseType,
} from "@/app/api/riddle/[slug]/types";
import { useEffect, useState } from "react";

export default function useRiddleChecker(personId: string) {
  const [guess, setGuess] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipent] = useState("");
  const [riddleId, setRiddleId] = useState("");

  const guessAttempt = (answer: string, riddleId: string) => {
    setLoading(true);
    setRiddleId(riddleId);
    setGuess(answer);
  };

  const guessReset = () => {
    setGuess("");
    setRecipent("");
    setLoading(false);
  };

  const isLoading = () => {
    return guess && loading;
  };

  useEffect(() => {
    async function postData() {
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

    if (guess && loading && riddleId) {
      postData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guess]);

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
