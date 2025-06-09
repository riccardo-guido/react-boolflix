import { useState } from "react";
import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "1126ff6465d7aee9aa36446b9a95f5d5";
const language = "it-IT";

export default function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const handleInputChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();

    const searchData = {
      api_key: apiKey,
      language,
      query: searchedTerm,
    };

    const queryParams = new URLSearchParams(searchData).toString();
    axios.get(`${apiUrl}/search/movie?${queryParams}`).then((res) => {
      console.log(res);

      const result = res.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        originalTitle: movie.original_title,
        language: movie.original_language,
        rating: movie.vote_average,
      }));

      setMovies(result);
    });
  };

  return (
    <div>
      <header>
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            value={searchedTerm}
            onChange={handleInputChange}
          />
          <button>Cerca</button>
        </form>
      </header>

      <main>
        {movies.map((movie) => (
          <ul>
            <li>Titolo: {movie.title}</li>
            <li>Titolo originale: {movie.originalTitle}</li>
            <li>Voto: {movie.rating}</li>
            <li>Lingua: {movie.language}</li>
          </ul>
        ))}
      </main>
    </div>
  );
}
