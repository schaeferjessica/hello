import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import ThemeContext from '../styles/themecontext';
import anime from 'animejs/lib/anime.es.js';
import { colorTransition } from '../styles/color';
import { withPrefix } from 'gatsby';

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
    display: inline-block;
    margin-bottom: 20px;

    span {
      display: inline-block;
      transform-origin: 50% 100%;
      opacity: 1;
      transform: scale(0);
      color: ${(props) => props.color};
      ${colorTransition}
    }
  }

  span {
    display: inline-block;
    opacity: 0;
  }

  a {
    color: ${(props) => props.color};
    ${colorTransition}

    &:focus-visible {
      outline: 1px solid ${(props) => props.color};
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
`;

// magnetic word
let target = null;
let state = {};
const run = () => {
  requestAnimationFrame(run);

  const { isMagnetic, transform, mouse, width, height, ease, scale } = state;

  transform.x = isMagnetic
    ? ((mouse.x - width / 2) / width) * transform.max
    : 0;
  transform.y = isMagnetic
    ? ((mouse.y - height / 2) / height) * transform.max
    : 0;
  transform.scale = isMagnetic ? scale : 1;

  // basic linear interpolation
  // https://www.youtube.com/watch?v=yWhgniVHROw
  ease.x += (transform.x - ease.x) * ease.value;
  ease.y += (transform.y - ease.y) * ease.value;
  ease.scale += (transform.scale - ease.scale) * ease.value;

  Object.assign(target.style, {
    transform: `
      translate(
        ${ease.x.toFixed(2)}px,
        ${ease.y.toFixed(2)}px
      )
      translateZ(0)
      scale(
        ${ease.scale.toFixed(2)}
      )`,
  });
};
const isMagnetic = (x, y) => {
  const { bounds } = state;

  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  // use pythagorean theorem to calculate
  // cursor distance from center of btn
  // a^2 + b^2 = c^2
  const a = Math.abs(centerX - x);
  const b = Math.abs(centerY - y);
  const c = Math.sqrt(a * a + b * b);

  // true if cursor distance from center of btn is
  // equal to btn radius + threshold
  const isHover = c < bounds.width / 2 + state.threshold;

  if (!state.history && isHover) {
    Object.assign(state, {
      threshold: state.threshold * state.ratio,
      history: true,
    });
  } else if (state.history && !isHover) {
    Object.assign(state, {
      threshold: state.threshold / state.ratio,
      history: false,
    });
  }

  return isHover;
};
const mouseMove = ({ pageX, pageY }) => {
  Object.assign(state, {
    mouse: {
      x: pageX,
      y: pageY,
    },
    isMagnetic: isMagnetic(pageX, pageY, state),
  });
};
const resize = () => {
  Object.assign(state, {
    bounds: target.getBoundingClientRect(),
    width: window.innerWidth,
    height: window.innerHeight,
  });
};

const Main = () => {
  const hallo = useRef(null);
  const intro = useRef(null);
  const name = useRef(null);
  const nameImage = useRef(null);
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
    green: {
      light: {
        foreground: '#62BFAD',
        background: '#F9F7E8',
      },
      dark: {
        foreground: '#F9F7E8',
        background: '#121738',
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
  const handleMouseEnter = () => {
    changeTheme(colorObj.pink);
    puddleMouseEnter();
  };
  const handleMouseLeave = () => {
    resetTheme();
    puddleMouseLeave();
  };

  useEffect(() => {
    anime.timeline().add({
      targets: hallo.current.children,
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

    target = hallo.current;
    state = {
      bounds: target.getBoundingClientRect(),
      threshold: parseInt(target.dataset.threshold),
      ratio: parseInt(target.dataset.ratio),
      isMagnetic: false,
      mouse: {
        x: 0,
        y: 0,
      },
      ease: {
        x: 0,
        y: 0,
        scale: 1,
        value: target.dataset.ease,
      },
      transform: {
        x: 0,
        y: 0,
        scale: 1,
        max: target.dataset.max,
      },
      width: window.innerWidth,
      height: window.innerHeight,
      history: false,
      scale: target.dataset.scale,
    };

    document.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', resize);
    run();
  }, []);

  return (
    <MainContainer className="container">
      <H1 color={color.foreground}>
        <b
          className="hello"
          ref={hallo}
          data-threshold="600" // the range where the element will still follow the mouse
          data-ratio="7" // wtf is this?
          data-max="70" // maximum movement from original position
          data-scale="1" // if you want to scale the element
          data-ease="0.225"
        >
          <span>Hello.</span>
        </b>{' '}
        <span ref={intro}>
          I am{' '}
          <b
            ref={name}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
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
