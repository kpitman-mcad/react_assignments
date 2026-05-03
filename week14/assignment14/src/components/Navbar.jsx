import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  // This code to dynamically update title of page suggested by ChatGPT
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/projectspage":
        return "Projects";
      case "/about":
        return "About";
      case "/sunshinekissproj":
        return "Sunshine Kiss";
      default:
        return "Page";
    }
  };

  return (
    <div className="navbar-div">
      <nav className="navbar">
        <div className="navbar__brand">
          <h3>{getTitle()}</h3>
        </div>

        <div className="navbar__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projectspage">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/sunshinekissproj">p5.js</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
