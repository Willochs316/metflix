import "./MovieCard.css";

const MovieCard = ({ movies }) => {
  return (
    <div className="movie-row-container">
      <div id="movie-category-container">
        <p className="movie-category">Top Movies</p>
      </div>
      {movies?.map((movie, index) => {
        return (
          <div className="main-movies-container" key={index}>
            <div className="movie_contents_container">
              <img className="movie-image" src={movie.Poster} alt="movie" />
              <p className="main-movie-title">{movie.Title}</p>
              <p className="movie-title-text">{movie.Type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
