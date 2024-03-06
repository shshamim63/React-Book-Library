import ServerClient from "../config/db";

export const getBooks = async () => {
  try {
    const { data: books } = await ServerClient.get("books");
    return books;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
};

export const createBooks = async (book) => {
  try {
    const data = await ServerClient.post("books", {
      ...book,
      pages: Number(book.pages) ?? 0,
      status: Number(book.status) ?? 0,
    });
    return data;
  } catch (error) {
    throw new Error("Failed to create Book");
  }
};
