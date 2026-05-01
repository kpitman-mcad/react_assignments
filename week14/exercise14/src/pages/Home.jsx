import BookList from "../components/BookList";
import { books } from "../data/bookData";

function Home() {
  const featuredBooks = books.filter((book) => book.featured);

  return (
    <>
      <BookList books={featuredBooks} />
    </>
  );
}
export default Home;
