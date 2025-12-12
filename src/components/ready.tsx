"use client";

import Game from "@/components/game";
import Instructions from "@/components/dialogues/instructions";
import useToggle from "@/components/hooks/useToggle";

export default function Riddle({ personId }: { personId: string }) {
  const toggle = useToggle();

  if (toggle.value) {
    return <Instructions onClick={toggle.flip} />;
  }

  return <Game personId={personId} />;
}
