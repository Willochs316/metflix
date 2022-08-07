import './MovieList.css';

const MovieList = ({
  movies,
  favouriteMovie: FavouriteMovie,
  favorites,
  setFavorites,
  saveToLocalStorage,
}) => {
  return (
    <div className='movie-row-container'>
      {movies?.map((movie, index) => {
        return (
          <div className='main-movies-container' key={index}>
            <div id='movie-title-container'>
              <p className='movie-title-text'>{movie.Type}</p>
            </div>

            <div className='movie_contents_container'>
              <img className='movie-image' src={movie.Poster} alt='movie' />
              <p className='main-movie-title'>{movie.Title}</p>
              <div className='over-lay'>
                <FavouriteMovie
                  movie={movie}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  saveToLocalStorage={saveToLocalStorage}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
