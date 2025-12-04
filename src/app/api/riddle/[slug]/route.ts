import { PersonType, people } from "@/data/people";
import { RiddleType, riddles } from "@/data/riddles";
import {
  correct,
  incorrect,
  noSuchPerson,
  outOfRiddles,
} from "@/app/api/riddle/[slug]/responses";
import { GuessDataType } from "@/app/api/riddle/[slug]/types";

const checkGuess = (guess: GuessDataType, riddle: RiddleType): boolean => {
  const cleanedGuess = guess.answer.toLowerCase().trim();
  const cleanedAnswer = riddle.answer.toLowerCase().trim();

  if (cleanedGuess === cleanedAnswer) {
    return true;
  }

  if (riddle.allowPlural && cleanedGuess === cleanedAnswer + "s") {
    return true;
  }

  return false;
};

const getPerson = (personId: string): null | PersonType => {
  const person = people.find((person) => person.id == personId);

  if (person) {
    return person;
  }

  return null;
};

const getRiddle = (filter: string[]): null | RiddleType => {
  const filteredRiddles = riddles.filter(
    (riddle) => !filter?.includes(riddle.id)
  );

  if (!filteredRiddles) return null;

  const riddleId = Math.floor(Math.random() * filteredRiddles.length);
  return filteredRiddles[riddleId];
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const queryParams = new URL(request.url).searchParams;
  const riddleFilter = queryParams.getAll("filter");
  const person = getPerson(slug);

  if (!person) {
    return noSuchPerson();
  }

  const riddle = getRiddle(riddleFilter);

  if (!riddle) {
    return outOfRiddles();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { allowPlural, answer, ...publicRiddle } = riddle;

  return Response.json(publicRiddle, { status: 200 });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const guess: GuessDataType = await request.json();
  const riddle: RiddleType = riddles[Number(guess.riddleId)];
  const person = getPerson(slug);

  if (!person) {
    return noSuchPerson();
  }

  if (checkGuess(guess, riddle)) {
    return correct(person.name);
  }

  return incorrect();
}
