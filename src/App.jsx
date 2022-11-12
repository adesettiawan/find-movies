import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const api = {
        base: import.meta.env.VITE_APP_BASE_URL,
        key: import.meta.env.VITE_APP_OMDB,
    };

    const searchMovies = async (title) => {
        const data = await axios.get(
            `${api.base}?apikey=${api.key}&s=${title}`
        );

        // return data;
        console.log(data.data.Search);
    };

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return <></>;
}

export default App;
