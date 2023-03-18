import React from "react";
import "./NavBar.css";
import Typography from "../Commons/Typography";
import { SearchBox } from "../Search/SearchInput";

const NavBar = ({ searchValue, setSearchValue }) => {
  return (
    <header>
      <div className="navbar">
        <div className="main-navigation-container">
          <Typography className="navbar-title" title="Metflix" />
        </div>
      </div>

      <div className="navigation-image-container">
        <div className="watch-something">
          <Typography className="movie-text" title="Watch something" />
          <Typography className="movie-text" title="incredible." />
        </div>
      </div>

      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
};

export default NavBar;
