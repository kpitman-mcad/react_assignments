// Import the CSS file for global or component styles
import "./css/app.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

// --- App Component ---
// This is the main component of the app (the parent)
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <BookList />
      </div>
      <Footer />
    </>
  );
}

// Export App as the default component for this file.
// This allows other files (like index.js) to import and render it.
export default App;
