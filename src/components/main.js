import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import ThemeContext from '../styles/themecontext';
import anime from 'animejs/lib/anime.es.js';
import { colorTransition } from '../styles/color';

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
  font-size: 95px;
  line-height: 125px;

  @media ${devices.mobile} {
    font-size: 45px;
    line-height: 70px;
  }

  b {
    font-weight: 600;
  }

  .hello {
    transform-origin: 50% 100%;
    display: inline-block;
    transform: scale(0);
    color: ${(props) => props.color};
    ${colorTransition}
  }

  span {
    display: inline-block;
    opacity: 0;
  }

  a {
    color: ${(props) => props.color};
    ${colorTransition}
  }
`;

const Main = () => {
  const hallo = useRef(null);
  const intro = useRef(null);
  const { color, changeTheme, resetTheme } = useContext(ThemeContext);
  const colorObj = {
    red: {
      foreground: '#FFAAC3',
      background: '#FFE7F3',
    },
    orange: {
      foreground: '#FFBBAC',
      background: '#F3FFDF',
    },
    blue: {
      foreground: '#7E9DFF',
      background: '#ECFFFC',
    },
    yellow: {
      foreground: '#45E2F6',
      background: '#FFFBCC',
    },
    green: {
      foreground: '#37C198',
      background: '#F3FFDF',
    },
  };

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
        <b
          ref={hallo}
          className="hello"
          onMouseEnter={() => changeTheme(colorObj.blue)}
          onMouseLeave={() => resetTheme()}
        >
          Hello.
        </b>{' '}
        <span ref={intro}>
          I am{' '}
          <b
            onMouseEnter={() => changeTheme(colorObj.orange)}
            onMouseLeave={() => resetTheme()}
          >
            {' '}
            Jessica
          </b>{' '}
          a{' '}
          <b
            onMouseEnter={() => changeTheme(colorObj.yellow)}
            onMouseLeave={() => resetTheme()}
          >
            frontend developer
          </b>{' '}
          at{' '}
          <b
            onMouseEnter={() => changeTheme(colorObj.red)}
            onMouseLeave={() => resetTheme()}
          >
            <a
              href="https://3pc.de/agentur/team/"
              target="_blank"
              rel="noopener noreferrer"
            >
              3pc
            </a>
          </b>{' '}
          from{' '}
          <b
            onMouseEnter={() => changeTheme(colorObj.green)}
            onMouseLeave={() => resetTheme()}
          >
            Berlin
          </b>
          .
        </span>
      </H1>
    </MainContainer>
  );
};

export default Main;
