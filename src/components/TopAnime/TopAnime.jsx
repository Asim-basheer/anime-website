import Cards from "../Cards/Cards";
import CardsPagination from "../CardsPagination/CardsPagination ";

function TopAnime({ data }) {
  return (
    <div className="container">
      <Cards
        dataset={data}
        sectionName="Top Anime"
        navgaitTo="topanime"
        favorite={true}
      />
      <CardsPagination />
    </div>
  );
}

export default TopAnime;
