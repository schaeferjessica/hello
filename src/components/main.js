import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: 400;
  font-size: 65px;

  @media ${devices.mobile} {
    font-size: 35px;
  }
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 65px;
  display: block;

  @media ${devices.mobile} {
    font-size: 35px;
  }
`;
const SVG = styled.svg`
  margin-right: 20px;
  margin-left: 20px;

  @media ${devices.mobile} {
    width: 50px;
    height: 18px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  color: ${(props) => props.color.foreground};
  font-weight: 400;
  font-size: 65px;

  @media ${devices.mobile} {
    font-size: 35px;
  }
`;

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color } = useContext(ThemeContext);

  return (
    <MainContainer className="container">
      <H1>
        Hello. I am Jessica a frontend developer from Berlin.
        <Button color={color} onClick={() => setIsOpen(!isOpen)}>
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
              fill={color.foreground}
            />
          </SVG>
          read {isOpen ? 'less' : 'more'}
        </Button>
      </H1>

      <Text
        style={{
          display: isOpen ? 'block' : 'none',
        }}
      >
        I have always been a creative person and a technology enthusiast. I was
        lucky to start my career at 3pc, where I got passionate about frontend
        development.
      </Text>
    </MainContainer>
  );
};

export default Main;
