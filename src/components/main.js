import React, { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import ThemeContext from '../styles/themecontext';
import anime from 'animejs/lib/anime.es.js';
import { colorTransition } from '../styles/color';
import { withPrefix } from 'gatsby';
import Scrambler from 'scrambling-letters';
import Table from './table';
import { myLocations, educations, experiences } from '../../static/data/data';

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
  margin-top: 100px;

  @media ${devices.mobile} {
    font-size: 45px;
    line-height: 70px;
    margin-top: 50px;
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

  .name {
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 400px;
      opacity: 0;
      pointer-events: none;

      &.is-active {
        opacity: 1;
      }
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
  const name = useRef(null);
  const nameImage = useRef(null);
  const [count, setCount] = useState(0);
  const { color, changeTheme, resetTheme } = useContext(ThemeContext);
  const colorObj = {
    pink: {
      light: {
        foreground: '#FF8B8B',
        background: '#F9F8E6',
      },
      dark: {
        foreground: '#F9F8E6',
        background: '#FF8B8B',
      },
    },
    yellow: {
      light: {
        foreground: '#28292B',
        background: '#EED974',
      },
      dark: {
        foreground: '#EED974',
        background: '#061A23',
      },
    },
    red: {
      light: {
        foreground: '#EF3E4A',
        background: '#F2F2F2',
      },
      dark: {
        foreground: '#F2F2F2',
        background: '#EF3E4A',
      },
    },
    gray: {
      light: {
        foreground: '#141414',
        background: '#F4F1EC',
      },
      dark: {
        foreground: '#F4F1EC',
        background: '#141414',
      },
    },
  };

  // image hover
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
  const puddleMouseEnter = () => {
    nameImage.current.classList.add('is-active');
    name.current.classList.add('is-active');
  };
  const puddleMouseMove = (e) => {
    const nameRect = name.current.getBoundingClientRect();
    // We have to clamp these values, because sometimes they return faulty values
    const clampedX = clamp(e.nativeEvent.offsetX, 0, nameRect.width * 2);
    const clampedY = clamp(e.nativeEvent.offsetY, 0, nameRect.height);
    nameImage.current.style.transform = `translate3d(calc(-50% + ${clampedX}px), calc(-50% + ${clampedY}px), 0)`;
  };
  const puddleMouseLeave = () => {
    nameImage.current.classList.remove('is-active');
    name.current.classList.remove('is-active');
  };
  const handleNameMouseEnter = () => {
    changeTheme(colorObj.pink);
    puddleMouseEnter();
  };
  const handleNameMouseLeave = () => {
    resetTheme();
    puddleMouseLeave();
  };

  const scramble = (word, callBack) => {
    Scrambler({
      target: '#location',
      random: [1000, 2000],
      speed: 100,
      text: word,
      afterAll: callBack,
    });
  };

  // location text animation
  const handleLocationMouseEnter = () => {
    changeTheme(colorObj.gray);

    // animate "berlin"
    scramble(myLocations[count], () => {
      let actualCount = count;
      const newCount = count === myLocations.length - 1 ? 0 : actualCount + 1;
      setCount(newCount);
    });
  };
  const handleLocationMouseLeave = () => {
    resetTheme();
    scramble('Berlin');
  };

  useEffect(() => {
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
    <MainContainer>
      <H1 color={color} className="container">
        <span ref={intro}>
          Hello. I am{' '}
          <b
            ref={name}
            onMouseEnter={() => handleNameMouseEnter()}
            onMouseLeave={() => handleNameMouseLeave()}
            onMouseMove={(e) => puddleMouseMove(e)}
            className="name"
          >
            {' '}
            Jessica
            <img
              src={withPrefix('/images/jessica.png')}
              alt="profile"
              loading="lazy"
              ref={nameImage}
            />
          </b>{' '}
          a{' '}
          <b
            className="text-background"
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
            id="location"
            onMouseEnter={() => handleLocationMouseEnter()}
            onMouseLeave={() => handleLocationMouseLeave()}
          >
            Berlin
          </b>
          .
        </span>
      </H1>
      <div id="table-container" style={{ width: '100%' }}>
        <Table title="Education:" data={educations} />
        <Table title="Experiences:" data={experiences} />
      </div>
    </MainContainer>
  );
};

export default Main;
