// Import the CSS file for global or component styles
import "./css/app.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import P5Sketch from "./components/P5Sketch";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
// import orbitSketch from "./sketches/orbitSketch";
import sunshineKissSketch from "./sketches/sunshineKissSketch";

// --- App Component ---
// This is the main component of the app (the parent)
function App() {
  return (
    <div className="app-div">
      <HashRouter>
        <Header
          title="Projects and Gifs"
          subtitle="Programming for Web, Spring 2026, MCAD"
        />
        <Navbar />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/p5sketch"
              element={<P5Sketch sketch={sunshineKissSketch} />}
            />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

// Export App as the default component for this file.
// This allows other files (like index.js) to import and render it.
export default App;
