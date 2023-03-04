import React from "react";
import { Svgs } from "../assets/svgs";

export const AddFavorite = () => {
  return (
    <>
      <Svgs.LoveIcon style={{ width: "40px", height: "40px" }} />
    </>
  );
};

export const RemoveFavorite = () => {
  return (
    <>
      <Svgs.CloseIcon
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "white",
        }}
      />
    </>
  );
};
