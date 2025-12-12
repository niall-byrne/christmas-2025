"use client";

import { useCallback, useEffect } from "react";
import { Button } from "@chakra-ui/react";

export default function Confirmation({ onClick }: { onClick: () => void }) {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <Button color={"green"} background={"lightgrey"} onClick={onClick}>
      OK!
    </Button>
  );
}
