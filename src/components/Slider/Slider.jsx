import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { SliderData } from "./SliderData";
import "./slider.scss";
function Slider() {
  const [current, setCurrent] = useState(1);

  const nextAnime = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };
  const prvAnime = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };

  const bulletsHandler = (index) => {
    setCurrent(index);
  };

  setInterval(() => {}, 5000);
  return (
    <div className="slider">
      {SliderData.map((data, index) => {
        return (
          <div
            key={data.id}
            className={
              current === index ? "slider-content active" : "slider-content"
            }
            style={{
              backgroundImage: `url(${data.img_url_wall})`,
            }}
          >
            <div className="slider-heading">
              <h1>
                {data.title}
                <br />
                <span>
                  {data.title_discription.length > 30
                    ? data.title_discription.slice(0, 20) + "..."
                    : data.title_discription}
                </span>
              </h1>
              <p>
                {data.discription.length > 200
                  ? data.discription.slice(0, 210) + "..."
                  : data.discription}
              </p>
              <Link to={`/details/${data.id}`} className="btn btn-watch">
                Watch now
              </Link>
            </div>
            <div className="slider-anime-img">
              <img src={data.img_url} alt="anime img" />
            </div>
          </div>
        );
      })}
      <div className="slider-control">
        <div className="slider-bullets">
          {SliderData.map((data, index) => {
            return (
              <span
                key={data.id}
                className={current === index ? "active" : ""}
                onClick={() => bulletsHandler(index)}
              ></span>
            );
          })}
        </div>
        <div className="slider-arrows">
          <div className="arrow-previous">
            <MdArrowBackIosNew onClick={prvAnime} />
          </div>
          <div className="arrow-next">
            <MdOutlineArrowForwardIos onClick={nextAnime} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
