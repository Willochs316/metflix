import { useEffect, useState } from "react";
import "./App.css";
import {
  AddFavorite,
  RemoveFavorite,
} from "./components/MovieButton/MovieButton";
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

  useEffect(() => {
    const updatedFavorites = JSON.parse(localStorage.getItem("react-movie-ap"));

    setFavorites(updatedFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-ap", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newMovieAdded = [...favorites, movie];
    setFavorites(newMovieAdded);
    saveToLocalStorage(newMovieAdded);
  };

  const removeFavoriteMovie = (movie) => {
    const existingFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(existingFavorites);
    saveToLocalStorage(existingFavorites);
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
            favouriteMovie={AddFavorite}
            handleFavorite={addFavoriteMovie}
          />
        </div>

        <div className="favorite-movie-set">
          <div id="movie-category-container">
            <Typography className="movie-category" title="My Favorites" />
          </div>

          <MovieCard
            movies={favorites}
            favouriteMovie={RemoveFavorite}
            handleFavorite={removeFavoriteMovie}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
