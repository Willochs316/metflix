import { useEffect, useState } from "react";
import "./App.css";
import Paragraph from "./components/Commons/Paragraph";
import MovieCard from "./components/Movies/MovieCard";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  return (
    <div className="App">
      <div className="movie-container">
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieCard movies={movies} setMovies={setMovies} />

        <div className="favorite-movie-container">
          <div className="favorite-title-container">
            <Paragraph className="favorite-title" title="My Favorites" />
          </div>
          <MovieCard movies={movies} setMovies={setMovies} />
        </div>
      </div>
    </div>
  );
};

export default App;
