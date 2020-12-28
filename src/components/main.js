import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: 400;
  font-size: 65px;
`;
const SVG = styled.svg`
  margin-right: 20px;
  margin-left: 20px;
`;

const Main = () => {
  return (
    <MainContainer className="container">
      <H1>
        Hello. I am Jessica a frontend developer from Berlin.
        <button>
          <SVG
            width="94"
            height="30"
            viewBox="0 0 94 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M93.4142 16.4142C94.1953 15.6332 94.1953 14.3668 93.4142 13.5858L80.6863 0.857864C79.9052 0.0768158 78.6389 0.0768158 77.8579 0.857864C77.0768 1.63891 77.0768 2.90524 77.8579 3.68629L89.1716 15L77.8579 26.3137C77.0768 27.0948 77.0768 28.3611 77.8579 29.1421C78.6389 29.9232 79.9052 29.9232 80.6863 29.1421L93.4142 16.4142ZM0 17H92V13H0V17Z"
              fill="black"
            />
          </SVG>
          read more
        </button>
      </H1>
    </MainContainer>
  );
};

export default Main;
