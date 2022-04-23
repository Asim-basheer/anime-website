import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Container from "./Container";
function Navbar() {
  const [toggleActiveState, setToggleActiveState] = useState(false);
  const links = [
    {
      href: "/",
      name: "home",
    },
    {
      href: "/episodes",
      name: "episodes",
    },
    {
      href: "/allanime",
      name: "all anime",
    },
    {
      href: "/search",
      name: "search",
    },
  ];

  return (
    <nav className="navbar">
      <Container>
        <div
          onClick={() => setToggleActiveState(false)}
          className={`navbar__overlay ${toggleActiveState ? "active" : ""}`}
        ></div>
        <div className="navbar__container">
          <Link to={"/"} className="navbar__logo">
            anime website
          </Link>
          <ul className={`navbar__list ${toggleActiveState ? "active" : ""}`}>
            {links.map((link) => {
              return (
                <li
                  onClick={() => setToggleActiveState(false)}
                  className="navbar__item"
                  key={link.name}
                >
                  <NavLink to={link.href} className="navbar__link">
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="navbar__user">
            <FaUser />
            <div
              onClick={() => setToggleActiveState(!toggleActiveState)}
              className={`navbar__toggle ${toggleActiveState ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
