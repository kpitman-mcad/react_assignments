import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";

function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="home-div">
      <section className="home">
        <h3>
          This is a showcase of projects created with particular excellence.
        </h3>
        <ProjectList projects={featuredProjects} />
      </section>
    </div>
  );
}
export default Home;
