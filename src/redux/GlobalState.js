import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

// initial state
const initialState = {
  watchlist:[],
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);


  // actions
  const addMovieToWatchlist = (movie) => {  
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };


  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
    }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};