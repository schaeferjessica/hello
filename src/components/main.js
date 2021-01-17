import React, { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import { moduleSpace } from '../styles/container';
import ThemeContext from '../styles/themecontext';
import anime from 'animejs/lib/anime.es.js';
import { colorTransition } from '../styles/color';
import Table from './table';
import { educations, experiences } from '../../static/data/data';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${moduleSpace}
`;
const H1 = styled.h1`
  font-weight: 400;
  font-size: 65px;
  line-height: 100px;

  @media ${devices.tablet} {
    font-size: 55px;
    line-height: 90px;
  }

  @media ${devices.mobile} {
    font-size: 35px;
    line-height: 55px;
  }

  b {
    font-weight: 600;
  }

  span {
    display: inline-block;
    opacity: 0;
  }

  a {
    color: ${(props) => props.color.foreground};
    ${colorTransition}

    &:focus-visible {
      outline: 1px solid ${(props) => props.color.foreground};
    }
  }

  .text-background {
    color: ${(props) => props.color.foreground};
    text-decoration: none;
    background-image: linear-gradient(
      180deg,
      black,
      ${(props) => props.color.foreground} 0
    );
    background-repeat: no-repeat;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    transition: background-size 0.4s ease;
    padding: 0.2em 0.2em 0;
    margin-left: -0.2em;
    background-position: 0 0.26em;
    background-size: 100% 1.16em;
    background-position: -18em 0.26em;
    transition: all 0.8s ease-in-out;

    &:hover {
      color: ${(props) => props.color.background};
      background-position: 0 0.26em;
    }
  }
`;

const Main = () => {
  const intro = useRef(null);
  const { color, changeTheme } = useContext(ThemeContext);
  const colorObj = {
    blue: {
      foreground: '#0C3C87',
      background: '#FCF8ED',
      backgroundImage: '',
    },
    dark: {
      foreground: '#FFF6E2',
      background: '#111C31',
      backgroundImage: '',
    },
  };

  useEffect(() => {
    anime.timeline().add({
      targets: intro.current,
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: 200,
    });
  }, []);

  return (
    <MainContainer>
      <H1 color={color} className="container">
        <span ref={intro}>
          Hello. I am{' '}
          <b
            onMouseEnter={() => changeTheme(colorObj.blue)}
            className="name"
          >
            {' '}
            Jessica
          </b>{' '}
          a{' '}
          <b
            className="text-background"
            onMouseEnter={() => changeTheme(colorObj.dark)}
          >
            frontend developer
          </b>{' '}
          at{' '}
            <a
              href="https://3pc.de/agentur/team/"
              target="_blank"
              rel="noopener noreferrer"
              data-linktype="extern"
            >
              3pc
            </a> from Berlin.
        </span>
      </H1>
      <div id="table-container" style={{ width: '100%' }}>
        <Table title="Education completed:" data={educations} />
        <Table title="Experiences gained:" data={experiences} />
      </div>
    </MainContainer>
  );
};

export default Main;
