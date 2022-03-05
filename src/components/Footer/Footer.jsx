import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiCopyrightFill } from "react-icons/ri";
import { BsFillSuitHeartFill } from "react-icons/bs";

import "./footer.scss";
function Footer() {
  const yearDate = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          <h2>
            Copyright
            <RiCopyrightFill />
            <span>{yearDate}</span>
            All rights reserved
          </h2>
        </div>
        <a href="#logo" className="scroll-top">
          <IoIosArrowUp />
        </a>
        <div className="developer-name">
          <h2>
            Made with <BsFillSuitHeartFill /> by Asim
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
