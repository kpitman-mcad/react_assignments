import { useState } from "react";

function ProjectCard({ title, author, image, link, description }) {
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-card-flex">
        <h4>{title}</h4>

        <div className="project-card__buttons">
          <button
            className="project-card__description-button"
            onClick={toggleDescription}
            style={{
              backgroundColor: showDescription
                ? "rgba(74, 255, 66, 0.3)"
                : "rgba(74, 255, 66, 0.1)",
              color: showDescription
                ? "rgba(203, 62, 250, 0.5)"
                : "rgba(203, 62, 250, 0.8)",
            }}
          >
            {showDescription ? "Hide Description" : "Show Description"}
          </button>
        </div>

        {showDescription && (
          <>
            <p className="project-card__description">{description}</p>
            <p>written by {author}</p>
          </>
        )}

        <a href={link} target="_blank" rel="noopener noreferrer">
          See the code for {title}
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
