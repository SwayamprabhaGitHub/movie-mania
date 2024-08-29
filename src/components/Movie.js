import React from "react";

import "./Movie.css";

const Movie = (props) => {
  return (
    <li className="movie">
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button className="dltmoviebtn" onClick={() => props.onDltMovie(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
