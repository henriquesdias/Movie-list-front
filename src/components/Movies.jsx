import styled from "styled-components";

import useGetMovies from "../hooks/useGetMovies";
import Movie from "./Movie";
import Loading from "../styles/Loading";
import MoviesStyle from "../styles/Movies-Style";
import Search from "./Search";

import { useEffect, useState, useRef } from "react";

export default function Movies() {
  const page = useRef(1);
  const [endOfPage, setEndOfPage] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const { error, movies, isLoading } = useGetMovies(
    endOfPage,
    page.current,
    valueInput
  );

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
      <Search
        valueInput={valueInput}
        setValueInput={setValueInput}
        page={page}
      />
      <MoviesStyle>
        {movies?.map((e, index) => (
          <Movie
            id={e.id}
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
