import React from "react";
import "./MovieButton.css";
import HeartIcon from "../../assets/svgs/heart.svg";
import CloseIcon from "../../assets/svgs/close-x.svg";

export const AddFavorite = () => {
  return (
    <>
      <img src={HeartIcon} alt="" className="heart-icon" />
    </>
  );
};

export const RemoveFavorite = () => {
  return (
    <>
      <img src={CloseIcon} alt="" className="close-icon" />
    </>
  );
};
