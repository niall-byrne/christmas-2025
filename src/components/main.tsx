"use client";

import Background from "@/components/background";
import Riddle from "@/components/game";
import useToggle from "@/components/hooks/useToggle";
import Introduction from "@/components/dialogues/introduction";

export default function Main({ personId }: { personId: string }) {
  const toggle = useToggle();

  return (
    <>
      <Background />
      {!toggle.value ? (
        <Riddle personId={personId} />
      ) : (
        <Introduction onClick={toggle.flip} />
      )}
    </>
  );
}
