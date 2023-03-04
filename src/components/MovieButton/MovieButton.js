import React from "react";
import "./MovieButton.css";
import { Svgs } from "../../assets/svgs";

export const AddFavorite = () => {
  return (
    <>
      <Svgs.HeartIcon className="heart-icon" />
    </>
  );
};

export const RemoveFavorite = () => {
  return (
    <>
      <Svgs.CloseIcon className="close-icon" />
    </>
  );
};
