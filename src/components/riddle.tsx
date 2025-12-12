"use client";

import Dialogue from "@/components/dialogue";
import useToggle from "@/components/hooks/useToggle";
import Confirmation from "@/components/buttons/confirmation";
import Answer from "@/components/answer";
import useRiddleFetcher from "@/components/hooks/useRiddleFetcher";
import useRiddleChecker from "@/components/hooks/useRiddleChecker";
import PlayAgain from "@/components/buttons/playAgain";
import OutOfRiddles from "@/components/errors/outOfRiddles";
import Malfunction from "@/components/errors/malfunction";
import { Spinner } from "@chakra-ui/react";

export default function Riddle({ personId }: { personId: string }) {
  const toggle = useToggle();
  const riddleChecker = useRiddleChecker(personId);
  const riddleFetcher = useRiddleFetcher(personId);

  const playAgain = () => {
    riddleChecker.guess.reset();
    riddleFetcher.reset(riddleFetcher.riddle!.id, personId);
  };

  if (riddleFetcher.isLoading() || riddleChecker.isLoading()) {
    return (
      <Dialogue title="AI thinking ..." messages={[" "]}>
        <Spinner marginBottom={10} size={"lg"} />
      </Dialogue>
    );
  }

  if (riddleFetcher.isOutOfRiddles()) {
    return <OutOfRiddles />;
  }

  if (riddleFetcher.riddle === null) {
    return <Malfunction />;
  }

  if (riddleChecker.recipient) {
    return (
      <Dialogue
        title="Santa's AI"
        messages={[
          "Well done human !",
          " ",
          `Please deliver this card to ${riddleChecker.recipient} !`,
        ]}
      >
        <PlayAgain onClick={playAgain} />
      </Dialogue>
    );
  }

  if (!riddleChecker.recipient && riddleChecker.guess.value) {
    return (
      <Dialogue
        title="Santa's AI"
        messages={["Ha, you'll have to do better than that !"]}
      >
        <Confirmation onClick={riddleChecker.guess.reset} />
      </Dialogue>
    );
  }

  if (toggle.value) {
    return (
      <Dialogue
        title="Santa's AI"
        messages={[
          "Thank you human !",
          " ",
          "If you can answer my riddle, I'll tell you who the card is addressed to.",
        ]}
      >
        <Confirmation onClick={toggle.flip} />
      </Dialogue>
    );
  }

  return (
    <Dialogue title="Hint" messages={riddleFetcher.riddle.hint}>
      <Answer
        onGuess={riddleChecker.guess.attempt}
        riddleId={riddleFetcher.riddle.id}
      />
    </Dialogue>
  );
}
