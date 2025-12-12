import Dialogue from "@/components/dialogues/base";
import { Spinner } from "@chakra-ui/react";

export default function Thinking() {
  return (
    <Dialogue title="AI thinking ..." messages={[" "]}>
      <Spinner marginBottom={10} size={"lg"} />
    </Dialogue>
  );
}
