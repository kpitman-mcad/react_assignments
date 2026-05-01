import { useState } from "react";

function BookCard({ title, author, image, link, description, featured }) {
  const [isRead, setIsRead] = useState(false);

  function toggleReadStatus() {
    setIsRead((prevState) => !prevState);
  }

  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription((prevState) => !prevState);
  }

  return (
    <article
      className="book-card"
      style={{
        backgroundColor: isRead
          ? "rgba(181,206,255, 0.9)"
          : "rgba(255, 255, 255, 0.9)",
      }}
    >
      {/* <header>Here are my books.</header> */}

      <img src={image} alt={title} className="book-image" />

      <div className="book-card-flex">
        <h3>{title}</h3>
        <p>written by {author}</p>

        <div className="book-card__buttons">
          <button
            className="book-card__description-button"
            onClick={toggleDescription}
            style={{
              backgroundColor: showDescription
                ? "rgb(181,139,83)"
                : "rgb(245, 160, 51)",
            }}
          >
            {showDescription ? "Hide Description" : "Show Description"}
          </button>
          <button
            className="book-card__status-button"
            onClick={toggleReadStatus}
            style={{
              backgroundColor: isRead ? "rgb(181,139,83)" : "rgb(245, 160, 51)",
            }}
          >
            {isRead ? "Mark as Unread" : "Mark as Read"}
          </button>
        </div>

        {showDescription && (
          <p className="book-card__description">{description}</p>
        )}

        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more about {title}
        </a>

        <p
          className="book-card__status"
          style={{
            color: isRead ? "rgb(150,128,81)" : "rgb(50,113,235)",
          }}
        >
          Status: {isRead ? "Read" : "Not Read"}
        </p>
      </div>
      {featured && <span className="book-featured">Featured</span>}
    </article>
  );
}
export default BookCard;
