import { useRef } from "react";

import styled from "styled-components";

import { IconSearch } from "../styles/Icons";

export default function Search({ valueInput, setValueInput, page }) {
  const ref = useRef(null);
  return (
    <SearchLayout>
      <div>
        <IconSearch onClick={() => ref.current.focus()} />
      </div>
      <input
        type=" search"
        placeholder="Search your favorite movie"
        value={valueInput}
        name="search"
        ref={ref}
        onChange={(e) => {
          page.current = 1;
          setValueInput(e.target.value);
        }}
      />
    </SearchLayout>
  );
}

const SearchLayout = styled.div`
  height: 40px;
  width: 300px;
  background-color: #f4f4f4;
  border-radius: 16px;
  width: 288px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 40px auto 0 auto;
  border: 1px solid green;
  div {
    width: 40px;
  }
  input {
    border: none;
    background-color: #f4f4f4;
    height: 100%;
    outline: none;
    margin-left: 8px;
    font-size: 15px;
  }
`;
