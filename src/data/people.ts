export type PersonType = {
  name: string;
  id: string;
  deliveryNote?: string;
};

export const people: PersonType[] = [
  {
    name: "Maeven Carson",
    id: "1",
  },
  {
    name: "Keva Carson",
    id: "2",
  },
  {
    name: "Andrea Carson",
    id: "3",
  },
  {
    name: "Nessa Byrne",
    id: "4",
    deliveryNote:
      "This person's card shouldn't be opened until January 4th 2026 !",
  },
];
