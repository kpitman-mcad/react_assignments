function ProjectCard({name, description}) {
  return (
    <div className="app-projectcard">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;