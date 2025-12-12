import Confirmation from "@/components/buttons/confirmation";
import Dialogue from "@/components/dialogues/base";

export default function Introduction({ onClick }: { onClick: () => void }) {
  return (
    <Dialogue
      title="Christmas Delivery System"
      messages={[
        "Thank goodness you're here !",
        " ",
        "Due to the Canadian postal strikes Santa has developed an advanced AI to help deliver Christmas cards.",
        " ",
        "Unfortunately, the AI loves riddles... ",
        " ",
        "Can you please solve a riddle to help us deliver this card ?",
      ]}
    >
      <Confirmation onClick={onClick} />
    </Dialogue>
  );
}
