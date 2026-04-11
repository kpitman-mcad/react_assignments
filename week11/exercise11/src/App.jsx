// IMport the CSS file for global or component styles
import './App.css';

// --- SimpleCard Component ---
// This is a functional component that accepts props. aka the child component!
// Props are parameters passed from the parent component.
function SimpleCard({ title, content }) {
  // 'title' and 'content' come from the parent component.
  return (
    <div className="app-simplecard">
      {/* Display the title prop in a heading */}
      <h3>{title}</h3>
      {/* Display the content prop in a paragraph */}
      <p>{content}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 React App by KRP. All rights reserved.</p>
    </footer>
  );
}

// --- App Componnent ---
// This is the main component of the app (the parent)
function App() {
  return (
    <div>
      {/* Page heading */}
      <h1>Hello World</h1>
      {/* Render the SimpleCard component.
          Pass 'title and 'content' as props. */}
      <SimpleCard title="Hello Card!" content="This is my first card!" />
      <SimpleCard title="Messier 42, M42, or NGC 1976..." content="The background image is a Hubble photo of the Orion Nebula." />
      {/* This is the footer card*/}
      <Footer />
    </div>
  );
}

// Export App as the default component for this file.
// This allows other files (like index.js) to import and render it.
export default App;