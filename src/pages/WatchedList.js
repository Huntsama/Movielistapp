// eslint-disable-next-line
import React, { useContext } from "react";
import { GlobalContext } from "../redux/GlobalState";
import { Banner } from "../components/Banner";

export const WatchedList = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div >
      
        
                  

        {watched.length > 0 ? (
          <div> 
          <h1 className="text-4xl font-bold text-center mt-6">Watched Movie List</h1> 
          // eslint-disable-next-line
          <div className=" grid grid-cols-5 md:grid-cols-2	justify-self-center	justify-center ml-9 mb-5 gap-y-6		">
            <h1 className="text-4xl font-bold text-center"></h1> 
            {watched.map((movie) => (
              <Banner movie={movie}  type="watched" />
            ))}
          </div>
          </div>
        ) : (
          <h2 className="text-4xl font-bold text-center mt-8">Your list is empty</h2>
        )}
      
    </div>
  );
};

export default WatchedList;