function BookCard({ title, author, image, link, description }) {
  return (
    <article className="book-card">
      {/* <header>Here are my books.</header> */}
      <img src={image} alt={title} className="book-image" />
      <div className="book-card-flex">
        <h3>{title}</h3>
        <p>written by {author}</p>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more about {title}
        </a>
      </div>
    </article>
  );
}
export default BookCard;
