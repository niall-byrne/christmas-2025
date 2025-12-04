export type RiddleType = {
  allowPlural: boolean;
  answer: string;
  hint: string[];
  id: string;
};

export const riddles: RiddleType[] = [
  {
    allowPlural: true,
    answer: "crow",
    hint: [
      "I am a type of black bird.",
      " ",
      "Alone I am just a nuisance",
      " ",
      "But once I'm in a group we are a felony crime !",
    ],
    id: "0",
  },
  {
    allowPlural: true,
    answer: "turtle dove",
    hint: [
      "Which Christmas bird moves the slowest ?",
      " ",
      "(My name is actually two words.)",
    ],
    id: "1",
  },
  {
    allowPlural: false,
    answer: "frostbite",
    hint: [
      "What do you get when you mix a vampire with a snowman ?",
      " ",
      "(One word.)",
    ],
    id: "2",
  },
  {
    allowPlural: false,
    answer: "santa",
    hint: [
      "Santa Claus' mother had three children.",
      " ",
      "The first child was named Fred.",
      " ",
      "The second was named Annette.",
      " ",
      "What was the name of the third ?",
    ],
    id: "3",
  },
  {
    allowPlural: false,
    answer: "south",
    hint: [
      "Every year, when delivering presents from the North Pole, Santa always starts his deliveries by travelling in the same direction.",
      " ",
      "Which direction is this ?",
    ],
    id: "4",
  },
  {
    allowPlural: false,
    answer: "97",
    hint: [
      "The elves Buddy and Herman were both born on Christmas Eve.",
      " ",
      "When buddy was 6 years old, Herman was half his age.",
      " ",
      "If Buddy is turning 100 this Christmas Eve, how old will Herman be ?",
    ],
    id: "5",
  },
  {
    allowPlural: true,
    answer: "needle",
    hint: [
      "Christmas Trees can NEVER be good at knitting because they are always dropping these.",
      " ",
      "What are they ?",
    ],
    id: "6",
  },
  {
    allowPlural: true,
    answer: "candle",
    hint: [
      "When young I'm tall, when old I'm short.",
      " ",
      "When the lights go out I'm on fire for sure.",
      " ",
      "What am I ?",
    ],
    id: "7",
  },
  {
    allowPlural: false,
    answer: "36",
    hint: [
      "I have just built a beautiful square gingerbread house, with a pointed (equilateral) triangle roof.",
      " ",
      "For the final touch I would like to stick 6 candy canes on every flat outside surface (except the bottom).",
      " ",
      "How many candy canes will I need ?",
      " ",
      "(Think carefully about my pointed roof.)",
    ],
    id: "8",
  },
];
