import { useEffect, useState } from "react";
import "./App.css";
import Typography from "./components/Commons/Typography";
import MovieCard from "./components/Movies/MovieCard";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4ab40f6a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  const handleAddFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  return (
    <div className="App">
      <div className="movie-container">
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="movie-set">
          <div id="movie-category-container">
            <Typography className="movie-category" title="Top Movies" />
          </div>

          <MovieCard
            movies={movies}
            setMovies={setMovies}
            handleAddFavorite={handleAddFavorite}
          />
        </div>

        <div className="favorite-movie-set">
          <div id="movie-category-container">
            <Typography className="movie-category" title="My Favorites" />
          </div>

          <MovieCard movies={favorites} />
        </div>
      </div>
    </div>
  );
};

export default App;
