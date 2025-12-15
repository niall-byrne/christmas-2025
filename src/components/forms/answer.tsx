"use client";

import { Field, Flex, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Submit from "@/components/buttons/submit";

export default function Answer({
  onGuess,
  riddleId,
}: {
  onGuess: (guess: string, riddleId: string) => void;
  riddleId: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [answer, setAnswer] = useState("");

  const startInput = () => {
    if (inputRef.current) {
      inputRef.current.placeholder = "";
      inputRef.current.focus();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onGuess(answer, riddleId);
      }}
    >
      <Flex>
        <Field.Root marginRight={3}>
          <Input
            autoComplete={"off"}
            bg={"white"}
            borderColor={"black"}
            color={"black"}
            name={"otp"}
            onChange={(e) => setAnswer(e.target.value)}
            onClick={startInput}
            placeholder="Click to type a guess!"
            ref={inputRef}
          />
        </Field.Root>
        <Submit />
      </Flex>
    </form>
  );
}
