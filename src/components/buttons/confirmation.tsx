"use client";

import { Button } from "@chakra-ui/react";

export default function Confirmation({ onClick }: { onClick: () => void }) {
  return (
    <Button color={"green"} background={"lightgrey"} onClick={onClick}>
      OK!
    </Button>
  );
}
