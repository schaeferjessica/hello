import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import ThemeContext from '../styles/themecontext';
import anime from 'animejs/lib/anime.es.js';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const H1 = styled.h1`
  font-weight: 300;
  font-size: 65px;
  line-height: 90px;

  @media ${devices.mobile} {
    font-size: 35px;
    line-height: 60px;
  }

  b {
    font-weight: 500;
  }

  .hello {
    transform-origin: 50% 100%;
    display: inline-block;
    transform: scale(0);
  }

  span {
    display: inline-block;
    opacity: 0;
  }

  a {
    color: ${(props) => props.color};
  }
`;

const Main = () => {
  const hallo = useRef(null);
  const intro = useRef(null);
  const { color } = useContext(ThemeContext);

  useEffect(() => {
    anime.timeline().add({
      targets: hallo.current,
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
    });

    anime.timeline().add({
      targets: intro.current,
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: 1000,
    });
  }, []);

  return (
    <MainContainer className="container">
      <H1 color={color.foreground}>
        <b ref={hallo} className="hello">
          Hello.
        </b>{' '}
        <span ref={intro}>
          I am <b>Jessica</b> a <b>frontend developer</b> at{' '}
          <b>
            <a
              href="https://3pc.de/agentur/team/"
              target="_blank"
              rel="noopener noreferrer"
            >
              3pc
            </a>
          </b>{' '}
          from <b>Berlin</b>.
        </span>
      </H1>
    </MainContainer>
  );
};

export default Main;
