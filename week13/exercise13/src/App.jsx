// Import the CSS file for global or component styles
import "./css/app.css";
import Home from "./pages/Home";

// --- App Component ---
// This is the main component of the app (the parent)
function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

// Export App as the default component for this file.
// This allows other files (like index.js) to import and render it.
export default App;
