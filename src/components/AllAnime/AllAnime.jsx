import Cards from "../Cards/Cards";
import CardsPagination from "../CardsPagination/CardsPagination ";
function Episodes({ data }) {
  return (
    <div className="container">
      <Cards dataset={data} sectionName="All Anime" favorite={true} />
      <CardsPagination />
    </div>
  );
}

export default Episodes;
