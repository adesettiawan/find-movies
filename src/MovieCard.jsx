import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieCard = ({ movie }) => {
    return (
        <div className="w-full sm:w-[200px] md:w-[250px]">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-4 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">
                <LazyLoadImage
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/400"
                    }
                    className="w-full h-[330px]"
                    effect="blur"
                    alt={movie.Title}
                    placeholderSrc={movie.Poster}
                    width={"100%"}
                />

                <div className="my-6 py-4 px-4">
                    <ul className="w-full flex justify-between items-center mb-3">
                        <li className="lg:text-sm font-semibold text-slate-500 uppercase">
                            {movie.Type}
                        </li>
                        <li className="bg-gradient-to-r from-teal-600 to-teal-700 px-3 py-1 rounded-full text-sm text-white font-semibold lg:text-[12px]">
                            {movie.Year}
                        </li>
                    </ul>
                    <h3 className="font-bold text-slate-900 text-lg lg:text-xl truncate hover:text-emerald-700">
                        {movie.Title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
