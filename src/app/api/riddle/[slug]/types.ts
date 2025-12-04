import { RiddleType } from "@/data/riddles";

export type RiddleResponseType = RiddleType;

export type GuessDataType = {
  riddleId: string;
  answer: string;
};

export type GuessResponseType = {
  for?: string;
};
