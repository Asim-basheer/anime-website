import React from "react";
import Cards from "../Cards/Cards";
import CardsPagination from "../CardsPagination/CardsPagination ";
function LastUpdates({ data }) {
  return (
    <div className="container">
      <Cards dataset={data} sectionName="Last Updates" />
      <CardsPagination />
    </div>
  );
}

export default LastUpdates;
