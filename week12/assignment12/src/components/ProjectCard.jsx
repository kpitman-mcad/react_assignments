function ProjectCard({ title, author, image, link, description }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-card-flex">
        <h3>{title}</h3>
        <p>written by {author}</p>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          See the code for {title}
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
