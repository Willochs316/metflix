import { Svgs } from "../../assets/svgs";
import "./MovieCard.css";

const MovieCard = ({ movies, handleAddFavorite }) => {
  return (
    <div className="movie-row-container">
      {movies?.map((movie, index) => (
        <div className="movie-frame" key={index}>
          <img className="movie-image" src={movie.Poster} alt="movie" />
          <p className="movie-header">{movie.Type}</p>

          <div
            className="overlay-container"
            onClick={() => handleAddFavorite(movie)}
          >
            <Svgs.LoveIcon style={{ width: "40px", height: "40px" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
