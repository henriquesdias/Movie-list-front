import styled from "styled-components";

import useGetMovies from "../hooks/useGetMovies";
import Movie from "./Movie";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function Movies() {
  const { error, movies, isLoading } = useGetMovies();
  const { height } = useInfiniteScroll();
  return (
    <MoviesStyle>
      {movies?.results.map((e, index) => (
        <Movie
          overview={e.overview}
          title={e.title}
          image={e.poster_path}
          key={index}
        />
      ))}
    </MoviesStyle>
  );
}

const MoviesStyle = styled.main`
  margin: 30px auto 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
