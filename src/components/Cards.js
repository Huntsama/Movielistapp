import React from 'react'
import Moment from "react-moment"



export const Cards = ({ movie }) => {
    return (
        <div>
            {movie.poster_path ? (
                <div className="h-auto  w-auto lg:flex rounded-lg mx-2 mt-6 ml-10 shadow-lg p-1 ">
                    <img className=" flex-none bg-cover rounded-lg text-center overflow-hidden" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`} />
                    <div className="  bg-white rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col mx-2 ">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-2xl mb-2">{movie.title}</div>
                            <Moment format="YYYY" className="text-gray-700 text-base text-clip overflow-hidden  ">{movie.release_date}</Moment>
                            <p maxlength="40" className="text-gray-700 text-base text-clip overflow-hidden mb-8 "> {movie.status}</p>

                        </div>
                        <div className=" flex  row-auto  relative h-32  w-auto  mt-8">
                            <button className=" bg-gray-700	 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full shadow-lg mr-5">
                            Add to Watchlist

                            </button>
                            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full shadow-lg  ml-2 w-auto">
                            Add to Watched

                            </button>

                        </div>




                    </div>
                </div>

            ) : (
                <div className="filler-poster" />
            )}
        </div>
    )
}
export default Cards;