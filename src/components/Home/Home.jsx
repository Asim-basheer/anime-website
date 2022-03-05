import React from "react";
import Cards from "../Cards/Cards";
import Slider from "../Slider/Slider";

function Home() {
  const data = [
    {
      id: 1,
      img_url: "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 2,
      img_url: "https://cdn.myanimelist.net/images/anime/1179/119897.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 3,
      img_url: "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 4,
      img_url: "https://cdn.myanimelist.net/images/anime/1877/119668.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 5,
      img_url: "https://cdn.myanimelist.net/images/anime/1446/118840.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 6,
      img_url: "https://cdn.myanimelist.net/images/anime/1263/119511.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 7,
      img_url: "https://cdn.myanimelist.net/images/anime/1247/120579.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 8,
      img_url: "https://cdn.myanimelist.net/images/anime/1088/120068.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 9,
      img_url: "https://cdn.myanimelist.net/images/anime/1132/120388.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 10,
      img_url: "https://cdn.myanimelist.net/images/anime/1861/120361.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
  ];

  return (
    <section className="home">
      <div className="container">
        <Slider />
        <Cards
          dataset={data}
          sectionName="Top Anime"
          navgaitTo="topanime"
          showMore={true}
          favorite={true}
        />
        <Cards
          dataset={data}
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
