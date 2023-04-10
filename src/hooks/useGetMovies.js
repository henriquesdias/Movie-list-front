import { useEffect, useState } from "react";

import getMovies from "../api/get-movies";

export default function useGetMovies(page = 1) {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies(page)
      .then((res) => {
        setIsLoading(false);
        setMovies(res);
      })
      .catch((res) => {
        setIsLoading(false);
        setError(res);
      });
  }, []);

  return { movies, error, isLoading };
}
