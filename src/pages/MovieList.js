import React, { useContext } from "react";
import { GlobalContext } from "../redux/GlobalState";
import { Banner } from "../components/Banner";

export const MovieList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div >                       
        {watchlist.length > 0 ? (
          <div className="mx-auto ml-6 mr-6"> 
          <h1 className="text-4xl font-bold text-center mt-6">My list</h1> 
          <div className="grid grid-cols-5 md:grid-cols-2	justify-self-center	justify-center ml-6 mr-6">
           
            {watchlist.map((movie) => (
              <Banner movie={movie}  type="watchlist" />
            ))}
          </div>
          </div>
        ) : (
          <h2 className="text-4xl font-bold text-center mt-8">Your list is empty</h2>
        )}
      
    </div>
  );
};

export default MovieList;