import Cards from "../Cards/Cards";
import CardsPagination from "../CardsPagination/CardsPagination ";
function Episodes({ data }) {
  return (
    <div className="container">
      <Cards dataset={data} sectionName="Episdoes" numberOfEpisodes="1/12" />
      <CardsPagination />
    </div>
  );
}

export default Episodes;
