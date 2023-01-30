import React from "react";
import {categories} from "../utils/constants";
import {css} from "@emotion/react";

const styles = css`
  background-color: black;
  display: flex;
  flex-direction: row;
  height: auto;
  overflow-y: auto;
  padding: 10px;
  justify-content: space-between;
  z-index: 99;
  @media (min-width: 576px) {
    flex-direction: column;
    height: 90%;
    padding: 0;
    position: fixed;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    color: white;
    border: none;
    max-width: 10rem;
    transition: 0.3s;
    top: 0;
    &:hover {
      .cat-icon {
        color: white;
      }
    }
  }
  .cat-icon {
    color: #dc3545;
  }
`;

const SideBar = ({selectedCat, setSelectedCat}) => {
  return (
    <>
      <div className="nav-categories " css={styles}>
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="btn btn-outline-danger rounded-pill  text-nowrap  text-start "
            style={{backgroundColor: cat.name === selectedCat && "#dc3545"}}
            onClick={() => setSelectedCat(cat.name)}
          >
            <span
              className="cat-icon"
              style={{color: cat.name === selectedCat && "white"}}
            >
              {cat.icon}
            </span>
            <span
              className="px-2"
              style={{opacity: cat.name === selectedCat ? "1" : ".8"}}
            >
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default SideBar;
