import styled from "styled-components";

const MovieStyle = styled.div`
  cursor: pointer;
  width: 200px;
  height: 410px;
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
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  p {
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
`;

export default MovieStyle;
