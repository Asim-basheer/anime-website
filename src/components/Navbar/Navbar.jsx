import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

import React from "react";

function Navbar() {
  const links = [
    {
      key: "",
      value: "home",
    },
    {
      key: "episodes",
      value: "episodes",
    },
    {
      key: "allanime",
      value: "all anime",
    },
    {
      key: "search",
      value: "search",
    },
  ];

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo" id="logo">
            <NavLink to="">anime website</NavLink>
          </div>
          <ul className="links">
            {links.map((link) => (
              <li key={link.key} className="nav-item">
                <NavLink to={link.key} className="nav-link">
                  {link.value}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="user">
            <Link to="signin" className="navbar-icon-container">
              <FaUserCircle />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
