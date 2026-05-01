import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // This code to dynamically update title of page suggested by ChatGPT
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Featured";
      case "/bookspage":
        return "Books Page";
      case "/about":
        return "About";
      default:
        return "Page";
    }
  };

  return (
    <div className="navbar-div">
      <nav className="navbar">
        <div className="navbar__brand">
          <h4>{getTitle()}</h4>
        </div>

        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/bookspage">Books Page</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
