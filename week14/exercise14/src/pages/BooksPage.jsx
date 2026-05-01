import BookList from "../components/BookList";
import { books } from "../data/bookData";

function BooksPage() {
  return (
    <>
      <BookList books={books} />
    </>
  );
}
export default BooksPage;
