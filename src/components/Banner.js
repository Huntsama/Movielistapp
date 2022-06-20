import React from "react";
import  Control from "./Control";

export const Banner = ({ movie , type}) => {
  return (
    <div className=" flex justify-center"> 
    <div className=" flex-none bg-cover rounded-lg text-center overflow-hidden mt-8  ">      
      <img
          className=" flex-none bg-cover rounded-lg text-center overflow-hidden shadow-lg"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />   
            <Control type={type} movie={movie} />
   
    </div>
    </div>
  );
};