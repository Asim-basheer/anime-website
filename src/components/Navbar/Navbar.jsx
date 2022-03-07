import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.scss";

import React from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };

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
          <div className="logo">
            <NavLink to="">anime website</NavLink>
          </div>
          <ul className={active ? "links active" : "links"}>
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
            <button onClick={changeActive} className="toggle">
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;