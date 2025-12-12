import {
  AnswerDataType,
  RiddleResponseType,
} from "@/app/api/riddle/[slug]/types";
import { PersonType, people } from "@/data/people";
import { RiddleType, riddles } from "@/data/riddles";
import {
  correct,
  incorrect,
  noSuchPerson,
  outOfRiddles,
} from "@/app/api/riddle/[slug]/responses";

const getPerson = (personId: string): null | PersonType => {
  const person = people.find((person) => person.id == personId);

  if (person) {
    return person;
  }

  return null;
};

const getRiddle = (filter: string[]): null | RiddleResponseType => {
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

  return Response.json(riddle, { status: 200 });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const answer: AnswerDataType = await request.json();
  const riddle: RiddleType = riddles[Number(answer.riddleId)];
  const person = getPerson(slug);

  if (!person) {
    return noSuchPerson();
  }

  if (answer.answer.toLowerCase().trim() !== riddle.answer) {
    return incorrect();
  }

  return correct(person.name);
}
