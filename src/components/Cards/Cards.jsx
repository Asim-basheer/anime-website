import { useState } from "react";
import "./cards.scss";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Cards({
  dataset,
  sectionName,
  navgaitTo,
  showMore = false,
  numberOfEpisodes = "",
  favorite = false,
}) {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  const addfavoriteHandler = (id) => {
    console.log(id);
    localStorage.setItem(
      "animeFavorite",
      JSON.stringify(dataset.filter((animeID) => animeID.id === id)[0])
    );
  };

  const deletefavoriteHandler = (id) => {
    console.log(id);
  };

  if (localStorage.getItem("animeFavorite")) {
    console.log(JSON.parse(localStorage.getItem("animeFavorite")));
  }
  return (
    <section className="cards">
      <h2 className="cards-section-name">{sectionName}</h2>
      {}
      <div className="cards-container">
        {dataset.map((data, i) => (
          <div className="cards-img-container" key={i}>
            {numberOfEpisodes.length > 0 ? (
              <div className="numbers">{numberOfEpisodes}</div>
            ) : null}
            <img src={data.img_url} alt={data.title} />
            <div className="cards-content">
              <h3>{data.title}</h3>
              <div className="cards-icon">
                {favorite && (
                  <button className="cards-favorite-icon">
                    {localStorage.getItem("animeFavorite") ? (
                      <BsHeartFill
                        onClick={() => deletefavoriteHandler(data.id)}
                      />
                    ) : (
                      <BsHeart onClick={() => addfavoriteHandler(data.id)} />
                    )}
                  </button>
                )}
                <Link to={`/details/${data.id}`} className="cards-play-icon">
                  <BsPlayCircleFill />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showMore ? (
        <Link to={navgaitTo} className="cards-more">
          See more
        </Link>
      ) : null}
    </section>
  );
}

export default Cards;
