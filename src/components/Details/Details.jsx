import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import TopTen from "../TopTen/TopTen";

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
            <div className="next-arrow">next</div>
            <div className="prev-arrow">prev</div>
          </div>
          <div className="episodes">
            <span className="episod">1</span>
            <span className="episod">2</span>
            <span className="episod">3</span>
            <span className="episod">4</span>
          </div>
          <div className="anime-details">
            <div className="img">
              <img src={animeDetails.img_url} alt="" />
            </div>
            <div className="anime-details-content">
              <h2 className="anime-title">{animeDetails.title}</h2>
              <p className="anime-description">{animeDetails.discription}</p>
              <div className="anime-details">
                <span className="type">type: tv series</span>
                <span className="studios">studios: Shin-Ei animation</span>
                <span>date aired: jan 8, 2022</span>
                <span>status: Currently Airing</span>
                <span className="genre">
                  genre: Comedy,Romance, slice of life
                </span>
                <span>scores: 8,36</span>
                <span>premiered: winter 2022</span>
                <span>duration: 24/min/ep</span>
                <span>quality: HD</span>
                <span>views: 144,590 </span>
              </div>
              <Cards dataset={data.slice(0, 10)} sectionName="suggestions" />
            </div>
          </div>
        </div>
        <div className="top-ten">
          <TopTen data={data.slice(0, 10)} />
        </div>
      </div>
    </section>
  );
}

export default Details;
