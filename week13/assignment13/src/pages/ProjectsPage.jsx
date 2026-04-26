import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>This is the Projects page of our application.</p>
      <ProjectList projects={projects} />
    </div>
  );
}
export default ProjectsPage;
