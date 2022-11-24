import React from "react";
import moviePicture from "../images/movie905.png";

function getPicture(name) {
  let result = false;
  switch (name) {
    case "movie":
      result = moviePicture;
      break;
    default:
      break;
  }
}

function Picture({ name, className }) {
  return <img className={className} src={getPicture(name)} />;
}

export default Picture;
