import BookCard from "./BookCard";
// import { books } from "../data/bookData";

function BookList({ books = [] }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
          link={book.link}
          description={book.description}
          featured={book.featured}
        />
      ))}
    </div>
  );
}
export default BookList;
