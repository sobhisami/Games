import React from "react";
import {StyledBackBtn} from './style.js';
import { Link } from "react-router-dom";
const BackBtn = ({ setPage }) => {
  return (
      <StyledBackBtn>
        <Link to={"/login"}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/navigation/arrow_back_ios_24px">
            <path
              id="icon/navigation/arrow_back_ios_24px_2"
              d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z"
              fill="#8692A6"
            />
          </g>
        </svg>
        </Link>
        <Link to={"/login"}>Back</Link>
      </StyledBackBtn>
  );
};

export default BackBtn;
