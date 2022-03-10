import "./top-ten.scss";
function TopTen({ data }) {
  return (
    <aside className="top-ten">
      <h2 className="title-top-ten">top ten</h2>
      <div className="top-ten-container">
        {data.map((anime, index) => {
          return (
            <div
              key={anime.id}
              className={
                index + 1 === 1 ? " top container-top-ten" : "container-top-ten"
              }
            >
              <span className="top-ten-number">{index + 1}</span>
              <div className="box-content">
                <img src={anime.img_url} alt="anime" />
                <div className="content">
                  <h3>{anime.title}</h3>
                  <p>14,734</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default TopTen;
