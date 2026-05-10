// Import the CSS file for global or component styles
import "./css/app.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import P5Sketch from "./pages/P5Sketch";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
// Sketch js import
import irrEggular from "./sketches/irrEggular";
import notBird from "./sketches/notbird/notBird";
import dungeonion from "./sketches/dungeonion/dungeonion";

// --- App Component ---
// This is the main component of the app (the parent)
function App() {
  return (
    <div className="app-div">
      <HashRouter>
        <Header
          title="Final Project"
          subtitle="Programming for Web, Spring 2026, MCAD"
        />
        <Navbar />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/notbird"
              element={
                <P5Sketch
                  sketch={notBird}
                  className="p5sketch-notbird"
                  title="Not Bird On A Wire"
                />
              }
            />

            <Route
              path="/irreggular"
              element={
                <P5Sketch
                  sketch={irrEggular}
                  className="p5sketch-irreggular"
                  title="irrEggular"
                />
              }
            />

            <Route
              path="/dungeonion"
              element={
                <P5Sketch
                  sketch={dungeonion}
                  className="p5sketch-dungeonion"
                  title="Dungeonion"
                />
              }
            />

            <Route path="/about" element={<About />} />
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
