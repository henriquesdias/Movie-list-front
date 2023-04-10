import styled from "styled-components";

const BannerStyle = styled.div`
  background-image: url("https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  height: 450px;
  color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 60px;
    font-weight: bold;
    border-bottom: 3px solid #ececec;
    padding-bottom: 10px;
  }
  span {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 40px;
    }
    span {
      font-size: 15px;
    }
  }
`;

export default BannerStyle;
