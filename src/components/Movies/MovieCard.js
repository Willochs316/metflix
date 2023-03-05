import "./MovieCard.css";

const MovieCard = ({
  movies,
  handleFavorite,
  favouriteMovie: FavouriteMovie,
}) => {
  return (
    <div className="movie-row-container">
      {movies &&
        movies.map((movie) => (
          <div className="movie-frame" key={movie.imdbID}>
            <img className="movie-image" src={movie.Poster} alt="movie" />
            <p className="movie-header">{movie.Type}</p>

            <div
              className="overlay-container"
              onClick={() => handleFavorite(movie)}
            >
              <FavouriteMovie />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieCard;
