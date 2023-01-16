import propTypes from "prop-types";

function Movie({ id, sTitle, title, backImg, rating, runtime, genres }) {
  return (
    <div id={id}>
      <img src={backImg} alt={sTitle}></img>
      <h2>{title}</h2>
      <p>{rating}</p>
      <p>{runtime}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  sTitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  backImg: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  runtime: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
