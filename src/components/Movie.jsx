import styled from "styled-components";

export default function Movie({ image, title, overview }) {
  return (
    <MovieStyle>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="movie" />
      <h2>{title}</h2>
      <p>{overview}</p>
    </MovieStyle>
  );
}

const MovieStyle = styled.div`
  width: 200px;
  height: 400px;
  word-wrap: break-word;
  background-color: rgb(238, 231, 231);
  padding: 10px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 50%;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
`;
