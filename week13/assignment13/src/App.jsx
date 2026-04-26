// Import the CSS file for global or component styles
import "./css/app.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// --- App Component ---
// This is the main component of the app (the parent)
function App() {
  return (
    <div className="app">
      <Header
        title="Projects and Gifs"
        subtitle="Programming for Web, Spring 2026, MCAD"
      />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

// Export App as the default component for this file.
// This allows other files (like index.js) to import and render it.
export default App;
