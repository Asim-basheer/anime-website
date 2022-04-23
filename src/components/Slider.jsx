import Container from "./Container";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Slider({ data }) {
  return (
    <div className="slider">
      <Container>
        <div className="slider__container">
          <div className="slider__box" key={data.id}>
            <img src={data} alt="img slider" className="slider__img-wall" />

            <div className="slider__details">
              <div className="slider__details__content">
                <Link to={"/"} className="slider__details__content__heading">
                  BLEACH
                </Link>
                <p className="slider__details__content__pragraph">
                  Ichigo Kurosaki is an ordinary high schooler—until his family
                  is attacked by a Hollow, a corrupt spirit that seeks to devour
                  human souls. It is then that he meets a Soul Reaper named
                  Rukia Kuchiki, who gets...
                </p>
              </div>
              <Link to={"/"} className="slider__details__link">
                watch now
              </Link>
            </div>

            <div className="slider__arrows">
              <div className="slider__arrow slider__arrow--left">
                <IoIosArrowBack />
              </div>
              <div className="slider__arrow slider__arrow--right">
                <IoIosArrowForward />
              </div>
            </div>

            <div className="slider__bullets">
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
              <span className="slider__bullet"></span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Slider;
