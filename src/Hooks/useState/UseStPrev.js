import React, { useState } from "react";

export const UseStPrev = () => {
  const [movie, setMovie] = useState({
    movieName: "Never Die",
    rating: "5.5",
    genre: "Fantasy",
  });

  const ratingHandler = () => {
    setMovie((prevState) => {
      return { ...prevState, rating: 6 };
    });
  };
  return <div>

    <h3> Movie Rating :  {movie.rating}</h3>
    <button onClick={ratingHandler}>Change Rating</button>
  </div>;
};
