import { RiddleType } from "@/data/riddles";

export type RiddleResponseType = Omit<RiddleType, "allowPlural" | "answer">;

export type GuessDataType = {
  riddleId: string;
  answer: string;
};

export type GuessResponseType = {
  for?: string;
};
