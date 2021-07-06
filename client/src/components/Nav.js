import React from "react";
import { Link } from "react-router-dom";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Search
          </Link>
          <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Saved
          </Link>
    </nav>
  );
}

export default Nav;