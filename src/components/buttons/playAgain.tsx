"use client";

import { Button } from "@chakra-ui/react";

export default function PlayAgain({ onClick }: { onClick: () => void }) {
  return (
    <Button color={"green"} background={"lightgrey"} onClick={onClick}>
      Play Again!
    </Button>
  );
}
