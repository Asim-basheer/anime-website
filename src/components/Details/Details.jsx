import { useParams } from "react-router-dom";
function Details({ data }) {
  const { id } = useParams();

  const animeDetails = data.filter((animeId) => Number(id) === animeId.id)[0];

  return (
    <section className="details">
      <div className="container">
        <div className="content">
          <div className="video">
            <img src={animeDetails.img_url} alt="details" />
            {/* <video width={320} height={240} controls>
              <source src="https://youtu.be/tKApfSoDPgM" type="video/mp4" />
              <source src="https://youtu.be/tKApfSoDPgM" type="video/ogg" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
        <div className="top-ten"></div>
      </div>
    </section>
  );
}

export default Details;
