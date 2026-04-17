import BookCard from "./BookCard";
import { books } from "../data/bookData";

function BookList() {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
          link={book.link}
          description={book.description}
        />
      ))}
    </div>
  );
}
export default BookList;
