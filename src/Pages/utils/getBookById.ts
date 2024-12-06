import { bookDetails } from "../types/bookDetails";

export const getBookById = (id: number, books: any) => {
  return books?.find((book:bookDetails) => book._id === id);
};
