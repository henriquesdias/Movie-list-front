import { useEffect, useState } from "react";

import getMovies from "../api/get-movies";
import searchMovies from "../api/search-movies";

export default function useGetMovies(endOfPage, page, searchDescription) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(page);
  useEffect(() => {
    if (searchDescription.length !== 0) {
      setIsLoading(true);
      searchMovies(searchDescription, page)
        .catch((res) => {
          setIsLoading(false);
          console.log(res);
        })
        .then((res) => {
          if (page === 1) {
            setIsLoading(false);
            setMovies([...res.results]);
          } else {
            setIsLoading(false),
              setMovies((movies) => [...movies, ...res.results]);
          }
        });
    }
  }, [searchDescription, endOfPage]);

  useEffect(() => {
    if (searchDescription.length === 0) {
      setIsLoading(true);
      getMovies(page)
        .then((res) => {
          if (page === 1) {
            setIsLoading(false);
            setMovies(res.results);
          } else {
            setIsLoading(false);
            setMovies((movies) => [...movies, ...res.results]);
          }
        })
        .catch((res) => {
          setIsLoading(false);
          setError(res);
        });
    }
  }, [endOfPage, searchDescription]);

  return { movies, error, isLoading };
}
