import Confirmation from "@/components/buttons/confirmation";
import Dialogue from "@/components/dialogues/base";

export default function Instructions({ onClick }: { onClick: () => void }) {
  return (
    <Dialogue
      title="Santa's AI"
      messages={[
        "Thank you human !",
        " ",
        "If you can answer my riddle, I'll tell you who the card is addressed to.",
      ]}
    >
      <Confirmation onClick={onClick} />
    </Dialogue>
  );
}
