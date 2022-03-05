import "./search.scss";
import { GoSearch } from "react-icons/go";
function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="search about your favorite anime"
          />
          <div className="search-icon">
            <GoSearch />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
