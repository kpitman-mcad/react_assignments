import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  // This code to dynamically update title of page suggested by ChatGPT
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Introduction";
      case "/notbird":
        return "Not Bird On A Wire";
      case "/irreggular":
        return "irrEggular";
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
          <h3>{getTitle()}</h3>
        </div>

        <div className="navbar__links">
          <NavLink to="/">Introduction</NavLink>
          <NavLink to="/notbird">Not Bird</NavLink>
          <NavLink to="/irreggular">irrEggular</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
