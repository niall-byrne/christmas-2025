import Dialogue from "@/components/dialogues/base";
import Confirmation from "@/components/buttons/confirmation";

export default function Whoops({ onClick }: { onClick: () => void }) {
  return (
    <Dialogue
      title="Santa's AI"
      messages={["Ha, you'll have to do better than that !"]}
    >
      <Confirmation onClick={onClick} />
    </Dialogue>
  );
}
