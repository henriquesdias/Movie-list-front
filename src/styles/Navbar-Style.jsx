import styled from "styled-components";

const NavbarStyle = styled.nav`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7651435574229692) 1%,
    rgba(79, 185, 104, 1) 20%
  );
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    color: #ececec;
    li {
      cursor: pointer;
      &:hover {
        color: black;
      }
      transition: color linear 100ms;
    }
  }
`;

export default NavbarStyle;
