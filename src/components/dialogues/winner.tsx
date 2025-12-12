import Dialogue from "@/components/dialogues/base";
import PlayAgain from "@/components/buttons/playAgain";

export default function Winner({
  recipient,
  onClick,
}: {
  recipient: string;
  onClick: () => void;
}) {
  return (
    <Dialogue
      title="Santa's AI"
      messages={[
        "Well done human !",
        " ",
        `Please deliver this card to ${recipient} !`,
      ]}
    >
      <PlayAgain onClick={onClick} />
    </Dialogue>
  );
}
