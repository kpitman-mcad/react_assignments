import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  // This code to dynamically update title of page suggested by ChatGPT
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Introduction";
      case "/notbird":
        return "p5.js Sketch";
      case "/irreggular":
        return "p5.js Sketch";
      case "/dungeonion":
        return "p5.js Sketch";
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
        {/* <button className="navbar__menu">Menu</button> */}
        <div className="navbar__links">
          <NavLink to="/">Introduction</NavLink>
          <NavLink to="/irreggular">irrEggular</NavLink>
          <NavLink to="/notbird">Not Bird</NavLink>
          <NavLink to="/dungeonion">Dungeonion</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
