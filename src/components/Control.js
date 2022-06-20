import React, { useContext } from "react";
import { GlobalContext } from "../redux/GlobalState";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai'


export const Control = ({ type, movie }) => {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
    } = useContext(GlobalContext);

    return (
        <div className="flex row justify-between">
            {type === "watchlist" && (
                <>

                    <HiEye onClick={() => addMovieToWatched(movie)} className='flex justify-start text-2xl bg-transparent	hover:bg-emerald-700 ml-4	 ' />

                    <AiOutlineDelete onClick={() => removeMovieFromWatchlist(movie.id)} className='flex justify-end text-2xl text-red-500 bg-transparent	hover:bg-emerald-700  mr-4' />

                </>
            )}

            {type === "watched" && (
                <>

                    <HiEyeOff onClick={() => moveToWatchlist(movie)} className='flex justify-start text-2xl bg-transparent	hover:bg-emerald-700 ml-4' />

                    <AiOutlineDelete onClick={() => removeFromWatched(movie.id)} className='flex justify-end text-2xl  text-red-500 bg-transparent	hover:bg-emerald-700  mr-4' />
                </>
            )}
        </div>
    );
};

export default Control;