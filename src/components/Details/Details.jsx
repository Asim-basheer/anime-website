import { useParams } from "react-router-dom";
function Details({ data }) {
  const { id } = useParams();

  const animeDetails = data.filter((animeId) => Number(id) === animeId.id)[0];

  return (
    <div className="details">
      <img src={animeDetails.img_url} alt="" />
    </div>
  );
}

export default Details;
