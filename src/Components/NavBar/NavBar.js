import React from "react";
import "./NavBar.css";
import Paragraph from "../Commons/Paragraph";
import { SearchBox } from "../SearchBox/SearchBox";
import movieCard from "../../Assets/images/movie_rectangle.png";

const NavBar = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="main-navigation-container">
            <Paragraph className="navbar-title" title="MyTestApp" />
          </div>
        </div>

        <div className="iphone-mobile-navbar">
          <div className="iphone-mobile-main-navigation-container">
            <Paragraph className="iphone-navbar-title" title="MyTestApp" />
          </div>
        </div>

        <div className="ipad-mobile-navbar">
          <div className="ipad-mobile-main-navigation-container">
            <Paragraph className="ipad-navbar-title" title="MyTestApp" />
          </div>
        </div>

        <div className="navigation-image-container">
          <img className="movie-card" src={movieCard} alt="" />
          <div className="movie_test_comment">
            <Paragraph className="movie-text" title="Watch something" />
            <Paragraph className="movie-text" title="incredible." />
          </div>
        </div>

        <div className="iphone-mobile-navigation-image-container">
          <div className="iphone-mobile_movie_test_comment">
            <Paragraph
              className="iphone-mobile-movie-text"
              title="Watch something"
            />
            <Paragraph
              className="iphone-mobile-movie-text"
              title="incredible."
            />
          </div>
        </div>

        <div className="ipad-navigation-image-container">
          <img className="ipad-movie-card" src={movieCard} alt="" />
          <div className="ipad-movie_test_comment">
            <Paragraph className="ipad-movie-text" title="Watch" />
            <Paragraph className="ipad-movie-text" title="something" />
            <Paragraph className="ipad-movie-text" title="incredible." />
          </div>
        </div>

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
    </>
  );
};

export default NavBar;
