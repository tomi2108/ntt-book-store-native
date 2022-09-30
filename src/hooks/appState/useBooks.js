import { getBooks } from "services/books.js";

import { useEffect, useState } from "react";


export const useBooks = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

  return [books];
};
