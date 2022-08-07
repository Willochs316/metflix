import React from 'react';
import './AddFavorite.css';

export const AddFavorites = ({
  movie,
  favorites,
  setFavorites,
  saveToLocalStorage,
}) => {
  const addFavoriteMovie = () => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='favouriteMovie-container' onClick={addFavoriteMovie}>
      <span className='add-to-favorite'>Add to Favorites</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-heart-fill'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
        />
      </svg>
    </div>
  );
};
