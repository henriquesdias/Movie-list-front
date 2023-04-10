import { useEffect, useState } from "react";

import getMovies from "../api/get-movies";

export default function useGetMovies(endOfPage, page) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
  }, [endOfPage]);

  return { movies, error, isLoading };
}
