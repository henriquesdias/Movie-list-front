import styled from "styled-components";

const Loading = styled.div`
  display: ${({ loading }) => (loading ? "block" : "none")};
  margin: 20px auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: #dbdcef;
  border-right-color: rgba(79, 185, 104);
  animation: spinner-d3wgkg 1s infinite linear;
  @keyframes spinner-d3wgkg {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Loading;
