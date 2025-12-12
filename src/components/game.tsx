"use client";

import Guess from "@/components/dialogues/guess";
import Malfunction from "@/components/errors/malfunction";
import OutOfRiddles from "@/components/errors/outOfRiddles";
import Thinking from "@/components/dialogues/thinking";
import Whoops from "@/components/dialogues/whoops";
import Winner from "@/components/dialogues/winner";
import useRiddleChecker from "@/components/hooks/useRiddleChecker";
import useRiddleFetcher from "@/components/hooks/useRiddleFetcher";

export default function Game({ personId }: { personId: string }) {
  const riddleChecker = useRiddleChecker(personId);
  const riddleFetcher = useRiddleFetcher(personId);

  const playAgain = () => {
    riddleChecker.guess.reset();
    riddleFetcher.reset(riddleFetcher.riddle!.id, personId);
  };

  if (riddleFetcher.isLoading() || riddleChecker.isLoading()) {
    return <Thinking />;
  }

  if (riddleFetcher.isOutOfRiddles()) {
    return <OutOfRiddles />;
  }

  if (riddleFetcher.riddle === null) {
    return <Malfunction />;
  }

  if (riddleChecker.recipient) {
    return <Winner onClick={playAgain} recipient={riddleChecker.recipient} />;
  }

  if (!riddleChecker.recipient && riddleChecker.guess.value) {
    return <Whoops onClick={riddleChecker.guess.reset} />;
  }

  return (
    <Guess
      hint={riddleFetcher.riddle.hint}
      onGuess={riddleChecker.guess.attempt}
      riddleId={riddleFetcher.riddle.id}
    />
  );
}
