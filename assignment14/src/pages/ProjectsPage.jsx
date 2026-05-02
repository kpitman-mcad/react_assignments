import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";

function ProjectsPage() {
  return (
    <div className="projects-div">
      <section className="projects">
        <h3>A complete library of all projects created during the course.</h3>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
export default ProjectsPage;
