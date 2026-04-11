import './css/app.css'
import ProjectCard from './components/ProjectCard.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app-main">
      <Header title="Header Title"/>
      <p>Hello World!</p>
      <ProjectCard name="Project One" description="First React Component" />
      <ProjectCard name="Project Two" description="Learning Props" />
      <Footer name="Footer Title"/>
    </div>
  );
}

export default App;