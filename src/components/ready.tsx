"use client";

import useToggle from "@/components/hooks/useToggle";
import Instructions from "@/components/dialogues/instructions";
import Game from "@/components/game";

export default function Riddle({ personId }: { personId: string }) {
  const toggle = useToggle();

  if (toggle.value) {
    return <Instructions onClick={toggle.flip} />;
  }

  return <Game personId={personId} />;
}
