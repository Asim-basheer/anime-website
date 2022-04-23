import { useState, useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import "./slider.scss";
function Slider({ data = [] }) {
  const [current, setCurrent] = useState(0);
  const lastFive = data.slice(data.length - 5, data.length);
  const nextAnime = () => {
    setCurrent(current === lastFive.length - 1 ? 0 : current + 1);
  };
  const prvAnime = () => {
    setCurrent(current === 0 ? lastFive.length - 1 : current - 1);
  };

  const bulletsHandler = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === lastFive.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [setCurrent, current, lastFive]);

  return (
    <div className="slider">
      {lastFive.map((data, index) => {
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
          {lastFive.map((data, index) => {
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
