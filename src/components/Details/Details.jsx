import { Link, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import TopTen from "../TopTen/TopTen";
import { MdDoubleArrow } from "react-icons/md";
import "./details.scss";
function Details({ data }) {
  const { id } = useParams();

  const animeDetails = data.filter((animeId) => Number(id) === animeId.id)[0];

  return (
    <section className="details">
      <div className="container">
        <div className="content">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="//ok.ru/videoembed/3189305445082"
              allow="autoplay"
              frameBorder={0}
              allowFullScreen
              title="vedio"
            ></iframe>
          </div>
          <div className="anime-details-control">
            <button className="prev-arrow">
              <MdDoubleArrow /> prev
            </button>
            <button className="next-arrow">
              next <MdDoubleArrow />
            </button>
          </div>
          <div className="episodes">
            <span className="episode active">1</span>
            <span className="episode">2</span>
            <span className="episode">3</span>
            <span className="episode">4</span>
          </div>
          <div className="anime-details">
            <div className="img">
              <img src={animeDetails.img_url} alt="" />
            </div>
            <div className="anime-details-content">
              <h2 className="anime-title">{animeDetails.title}</h2>
              <p className="anime-description">{animeDetails.discription}</p>
              <div className="anime-details">
                <span>
                  type:
                  <Link to={""} className="type">
                    tv series
                  </Link>
                </span>
                <span>
                  studios:
                  <Link className="studios" to={""}>
                    shin-ei animation
                  </Link>
                </span>
                <span>date aired: jan 8, 2022</span>
                <span>status: Currently Airing</span>
                <span>
                  genre:
                  <Link to={""} className="genre">
                    comedy, romance, slice of life
                  </Link>
                </span>
                <span>scores: 8,36</span>
                <span>premiered: winter 2022</span>
                <span>duration: 24/min/ep</span>
                <span>quality: HD</span>
                <span>views: 144,590 </span>
              </div>
            </div>
          </div>
          <Cards dataset={data.slice(0, 10)} sectionName="suggestions" />
        </div>
        <TopTen data={data.slice(0, 10)} />
      </div>
    </section>
  );
}

export default Details;
