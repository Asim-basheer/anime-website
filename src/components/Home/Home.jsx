import React from "react";
import Cards from "../Cards/Cards";
import Slider from "../Slider/Slider";

function Home({ data }) {
  return (
    <section className="home">
      <div className="container">
        <Slider />
        <Cards
          dataset={data.slice(0, 10)}
          sectionName="Top Anime"
          navgaitTo="topanime"
          showMore={true}
          favorite={true}
        />
        <Cards
          dataset={data.slice(0, 10)}
          sectionName="Last Updates"
          navgaitTo="lastupdates"
          showMore={true}
          numberOfEpisodes="1/12"
        />
      </div>
    </section>
  );
}

export default Home;
