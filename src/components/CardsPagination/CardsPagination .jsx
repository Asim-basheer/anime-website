import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./cards_pagination.scss";
function CardsPagination() {
  return (
    <div className="pagination">
      <div className="arrow-pagination-next">
        <MdKeyboardArrowLeft />
      </div>
      <div className="number-of-pages">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
      </div>
      <div className="arrow-pagination-previous">
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}

export default CardsPagination;
