// Import the CSS file for global or component styles
import "./css/app.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

// --- App Component ---
// This is the main component of the app (the parent)
function App() {
  return (
    <HashRouter>
      <Header title="Theatrical Books and Plays" />
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookspage" element={<BooksPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
}

// Export App as the default component for this file.
// This allows other files (like index.js) to import and render it.
export default App;
