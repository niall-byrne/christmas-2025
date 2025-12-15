export const correct = (
  recipient: string,
  deliveryNote: string | undefined
) => {
  if (deliveryNote) {
    return Response.json({ for: recipient, deliveryNote }, { status: 200 });
  }
  return Response.json({ for: recipient }, { status: 200 });
};

export const noSuchPerson = () =>
  Response.json({ error: "No such person !" }, { status: 404 });

export const incorrect = () =>
  Response.json({ error: "Incorrect !" }, { status: 400 });

export const outOfRiddles = () =>
  Response.json({ error: "No more riddles !" }, { status: 422 });
