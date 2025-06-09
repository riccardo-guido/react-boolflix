import { createContext, useContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext();

const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_URL;
const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;
const language = import.meta.env.VITE_APP_LANGUAGE;

const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const search = (searchedTerm) => {
    const searchData = {
      api_key: apiKey,
      language,
      query: searchedTerm,
    };

    const queryParams = new URLSearchParams(searchData).toString();
    axios.get(`${apiUrl}/search/movie?${queryParams}`).then((res) => {
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

  const searchValues = {
    movies,
    search,
  };
  return (
    <SearchContext.Provider value={searchValues}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { SearchProvider, useSearch };
