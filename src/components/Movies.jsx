import styled from "styled-components";

import useGetMovies from "../hooks/useGetMovies";
import Movie from "./Movie";
import Loading from "../styles/Loading";
import MoviesStyle from "../styles/Movies-Style";

import { useEffect, useState, useRef } from "react";

export default function Movies() {
  const page = useRef(1);
  const [endOfPage, setEndOfPage] = useState(false);
  const { error, movies, isLoading } = useGetMovies(endOfPage, page.current);

  useEffect(() => {
    if (!isLoading) {
      function handleScroll() {
        const isEndOfPage =
          window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        if (isEndOfPage) page.current += 1;
        setEndOfPage(isEndOfPage);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <ContainerMovies>
      <MoviesStyle>
        {movies?.map((e, index) => (
          <Movie
            overview={e.overview}
            title={e.title}
            image={e.poster_path}
            key={index}
          />
        ))}
      </MoviesStyle>
      <Loading loading={isLoading} />
    </ContainerMovies>
  );
}

const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
`;
