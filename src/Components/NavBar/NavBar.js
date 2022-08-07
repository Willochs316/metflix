import React from 'react';
import './NavBar.css';
import Paragraph from '../Commons/Paragraph';
import { SearchBox } from '../SearchBox/SearchBox';

const NavBar = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <header>
        <nav>
          <div className='main-navigation-container'>
            <Paragraph className='navbar-title' title='Metflix App' />
          </div>
        </nav>

        <div className='navigation-image-container'>
          <div className='movie_test_comment'>
            <Paragraph title='Watch something' />
            <Paragraph title='incredible.' />
          </div>
        </div>

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
    </>
  );
};

export default NavBar;
