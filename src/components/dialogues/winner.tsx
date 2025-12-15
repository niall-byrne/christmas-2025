import Dialogue from "@/components/dialogues/base";
import type { GuessResponseType } from "@/app/api/riddle/[slug]/types";
import PlayAgain from "@/components/buttons/playAgain";

export default function Winner({
  response,
  onClick,
}: {
  response: GuessResponseType;
  onClick: () => void;
}) {
  const messages = [
    "Well done human !",
    " ",
    `Please deliver this card to ${response.for} !`,
  ];

  if (response.deliveryNote) {
    messages.splice(2, 0, "** DELIVERY NOTE **");
    messages.splice(3, 0, response.deliveryNote);
    messages.splice(4, 0, " ");
  }

  return (
    <Dialogue title="Santa's AI" messages={messages}>
      <PlayAgain onClick={onClick} />
    </Dialogue>
  );
}
