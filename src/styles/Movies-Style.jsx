import styled from "styled-components";

const MoviesStyle = styled.main`
  margin: 30px auto 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 5px;
  }
`;

export default MoviesStyle;
