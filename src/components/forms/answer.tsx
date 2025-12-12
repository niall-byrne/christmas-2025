"use client";

import { Flex, Field } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import Submit from "@/components/buttons/submit";

export default function Answer({
  onGuess,
  riddleId,
}: {
  onGuess: (guess: string, riddleId: string) => void;
  riddleId: string;
}) {
  const [answer, setAnswer] = useState("");

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
            autoFocus={true}
            bg={"white"}
            borderColor={"black"}
            color={"black"}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </Field.Root>
        <Submit />
      </Flex>
    </form>
  );
}
