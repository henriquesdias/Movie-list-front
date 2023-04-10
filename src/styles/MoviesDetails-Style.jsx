import styled from "styled-components";

const MovieDetailsStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.showDetails ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  > div {
    background-color: white;
    position: relative;
    z-index: 3;
    max-width: 700px;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    align-items: ${({ isLoading }) => (isLoading ? "center" : "initial")};
    img {
      width: 50%;
      border-radius: 10px 0 0 10px;
    }
    div:last-child {
      display: flex;
      flex-direction: column;
      padding: 20px 10px 10px 10px;
      overflow-y: auto;
      span {
        margin-bottom: 10px;
      }
      h2 {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      p {
        margin-bottom: 15px;
        text-align: justify;
      }
    }
  }
  @media (max-width: 500px) {
    > div {
      height: 300px;
    }
  }
`;

export default MovieDetailsStyle;
