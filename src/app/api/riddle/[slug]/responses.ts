export const correct = (recipient: string) =>
  Response.json({ for: recipient }, { status: 200 });

export const noSuchPerson = () =>
  Response.json({ error: "No such person !" }, { status: 404 });

export const incorrect = () =>
  Response.json({ error: "Incorrect !" }, { status: 400 });

export const outOfRiddles = () =>
  Response.json({ error: "No more riddles !" }, { status: 422 });
