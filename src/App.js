import { useEffect, useState } from 'react';
import './App.css';
import Paragraph from './Components/Commons/Paragraph';
import AddFavorites from './Components/Movies/AddFavorite/AddFavorites';
import MovieList from './Components/Movies/MovieList';
import RemoveFavorites from './Components/Movies/RemoveFavorite/RemoveFavorites';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([{}]);
  const [searchValue, setSearchValue] = useState('');

  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4ab40f6a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('metflix-movie-app-favorites')
    );
    setFavorites(movieFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('metflix-movie-app-favorites', JSON.stringify(items));
  };

  return (
    <div className='App'>
      <div className='movie-container'>
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieList
          movies={movies}
          favorites={favorites}
          setFavorites={setFavorites}
          favouriteMovie={AddFavorites}
          saveToLocalStorage={saveToLocalStorage}
        />
        <div className='favorite-movie-container'>
          <div>
            <Paragraph className='favorite-title' title='Favorites' />
          </div>

          <div className='favorite-movie-row'>
            <MovieList
              movies={favorites}
              favorites={favorites}
              setFavorites={setFavorites}
              favouriteMovie={RemoveFavorites}
              saveToLocalStorage={saveToLocalStorage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
