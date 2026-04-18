import ProjectList from "../components/ProjectList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projectData";

function Home() {
  return (
    <>
      <Header
        title="Projects and Gifs"
        subtitle="Programming for Web, Spring 2026, MCAD"
      />
      <ProjectList projects={projects} />
      <Footer />
    </>
  );
}
export default Home;
