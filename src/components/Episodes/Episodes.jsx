import React from "react";
import Cards from "../Cards/Cards";
import CardsPagination from "../CardsPagination/CardsPagination ";
function Episodes() {
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
    {
      id: 11,
      img_url: "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 12,
      img_url: "https://cdn.myanimelist.net/images/anime/1906/117145.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 13,
      img_url: "https://cdn.myanimelist.net/images/anime/1583/119223.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 14,
      img_url: "https://cdn.myanimelist.net/images/anime/1576/119361.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 15,
      img_url: "https://cdn.myanimelist.net/images/anime/1046/118527.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 16,
      img_url: "https://cdn.myanimelist.net/images/anime/1360/119608.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 17,
      img_url: "https://cdn.myanimelist.net/images/anime/1783/118956.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 18,
      img_url: "https://cdn.myanimelist.net/images/anime/1367/120393.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 19,
      img_url: "https://cdn.myanimelist.net/images/anime/1050/118367.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 20,
      img_url: "https://cdn.myanimelist.net/images/anime/1821/116864.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
  ];
  return (
    <div className="container">
      <Cards dataset={data} sectionName="Episdoes" numberOfEpisodes="1/12" />
      <CardsPagination />
    </div>
  );
}

export default Episodes;
