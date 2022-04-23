import { Link, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import TopTen from "../TopTen/TopTen";
import { MdDoubleArrow } from "react-icons/md";
import "./details.scss";
function Details({ data }) {
  const { id } = useParams();

  const animeDetails = data.filter((animeId) => Number(id) === animeId.id)[0];

  let episodesArr = [];

  for (let i = 0; i < animeDetails.episodes; i++) {
    episodesArr.push(i + 1);
  }

  return (
    <section className="details">
      <div className="container">
        <div className="content">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src={animeDetails.video_url}
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
            {episodesArr.map((_, i) => {
              return (
                <span
                  key={i}
                  className={i + 1 === 1 ? "episode active" : "episode"}
                  title={`episode ${i + 1}`}
                >
                  {i + 1}
                </span>
              );
            })}
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
                    {animeDetails.type}
                  </Link>
                </span>
                <span>
                  studios:
                  <Link className="studios" to={""}>
                    {animeDetails.studio}
                  </Link>
                </span>
                <span>date aired: {animeDetails.data_aired}</span>
                <span>status: {animeDetails.status}</span>
                <span>
                  genre:
                  <Link to={""} className="genre">
                    {animeDetails.genre}
                  </Link>
                </span>
                <span>scores: {animeDetails.score} </span>
                <span>premiered: {animeDetails.premiered}</span>
                <span>duration: {animeDetails.duration}</span>
                <span>quality: {animeDetails.quality}</span>
                <span>views: {animeDetails.views} </span>
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
