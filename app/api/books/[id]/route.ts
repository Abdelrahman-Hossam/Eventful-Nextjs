import books from "../../db";

export async function PUT(
  request: Request,
  context: { params: { id: string } },
) {
  const bookId = +context.params.id;
  const index = books.findIndex((book) => book.id === bookId);
  const book = await request.json();
  books[index] = { ...books[index], ...book };
  return Response.json(books);
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } },
) {
  const id = +context.params.id;
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);
  return Response.json(books);
}
