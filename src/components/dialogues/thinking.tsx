import { Spinner } from "@chakra-ui/react";
import Dialogue from "@/components/dialogues/base";

export default function Thinking() {
  return (
    <Dialogue title="AI thinking ..." messages={[" "]}>
      <Spinner marginBottom={10} size={"lg"} />
    </Dialogue>
  );
}
