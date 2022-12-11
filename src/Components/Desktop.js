import React from 'react'
import Paragraph from './Commons/Paragraph'
import MovieCard from './Movies/MovieCard'
import NavBar from './NavBar/NavBar'

const Desktop = ({ movies, setMovies, searchValue, setSearchValue }) => {
  return (
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
  )
}

export default Desktop