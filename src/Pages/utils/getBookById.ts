export const getBookById = (id: string, books: any) => {
  return books?.find((book) => book._id === id);
};
