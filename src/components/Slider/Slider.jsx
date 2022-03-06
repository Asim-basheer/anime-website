import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

import "./slider.scss";
function Slider() {
  return (
    <div
      className="slider"
      style={{
        backgroundImage:
          "url(https://www13.0zz0.com/2022/03/06/02/700270706.jpg)",
      }}
    >
      <div className="slider-content">
        <div className="slider-heading">
          <h1>
            Demon Slayer
            <br />
            <span>Kimetsu no Yaiba: Yuukaku-hen</span>
          </h1>
          <p>
            Lorem feugait et volutpat. ut consequat. dolore tation ea iriure
            zzril dolore nonummy tincidunt amet, minim laoreet accumsan euismod
            blandit nulla te consequat, in molestie
          </p>
          <Link to={""} className="btn btn-watch">
            Watch now
          </Link>
        </div>
        <div className="slider-anime-img">
          <img
            src="https://www14.0zz0.com/2022/03/04/02/741595424.jpg"
            alt="anime img"
          />
        </div>
      </div>
      <div className="slider-control">
        <div className="slider-bullets">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="slider-arrows">
          <div className="arrow-next">
            <MdArrowBackIosNew />
          </div>
          <div className="arrow-previous">
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
