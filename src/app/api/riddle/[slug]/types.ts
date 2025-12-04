import { RiddleType } from "@/data/riddles";

export type RiddleResponseType = RiddleType;

export type AnswerDataType = {
  riddleId: string;
  answer: string;
};

export type AnswerResponseType = {
  for?: string;
};
