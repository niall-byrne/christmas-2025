import Answer from "@/components/forms/answer";
import Dialogue from "@/components/dialogues/base";

export default function Guess({
  hint,
  onGuess,
  riddleId,
}: {
  hint: string[];
  onGuess: (answer: string, riddleId: string) => void;
  riddleId: string;
}) {
  return (
    <Dialogue title="Hint" messages={hint}>
      <Answer onGuess={onGuess} riddleId={riddleId} />
    </Dialogue>
  );
}
