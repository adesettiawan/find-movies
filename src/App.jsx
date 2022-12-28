import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import NoData from "./NoData";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const api = {
        base: import.meta.env.VITE_APP_BASE_URL,
        key: import.meta.env.VITE_APP_OMDB,
    };

    const searchMovies = async (title) => {
        const data = await axios.get(
            `${api.base}?apikey=${api.key}&s=${title}`
        );

        setMovies(data.data.Search);
    };

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    return (
        <>
            <section className="pb-2 pt-20">
                <div className="container mx-auto px-6 justify-center items-center">
                    <div className="w-full">
                        <div className="mx-auto max-w-xl text-center">
                            <h1 className="font-extrabold  text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 py-2 text-transparent mb-16">
                                Find Movies
                            </h1>
                            <div className="flex justify-end items-center relative">
                                <input
                                    type="text"
                                    placeholder="Search for movies..."
                                    className="w-full bg-slate-50 border-slate-200 p-3 focus:ring-teal-700 rounded-lg text-slate-700 block focus:border-teal-700 ring-1 ring-teal-600 focus:outline-none shadow-xl"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 absolute mr-3 text-slate-700 cursor-pointer"
                                    onClick={() => searchMovies(searchTerm)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20 pb-32">
                <div className="container mx-auto px-6 justify-center items-center">
                    <div className="flex flex-wrap justify-center lg:mx-auto gap-8 lg:w-full">
                        {movies?.length > 0 ? (
                            movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.imdbID} />
                            ))
                        ) : (
                            <div className="flex flex-col">
                                <NoData />
                                <h1 className="text-center font-bold text-3xl text-slate-900 mb-1">
                                    404
                                </h1>
                                <h3 className="text-center font-bold text-xl text-slate-900">
                                    No movies found !..
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
