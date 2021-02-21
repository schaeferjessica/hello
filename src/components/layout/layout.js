import '../../../static/fonts.css';
import React, { useEffect, useRef, useState } from 'react';
import GlobalNormalizer from '../../styles/normalize';
import GlobalStyles from '../../styles/styles';
import GlobalContainer from '../../styles/container';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import ThemeContext from '../../styles/themecontext';
import { devices } from '../../styles/breakpoints';
import SEO from '../seo';

const Cursor = styled.div`
  width: 53px;
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  pointer-events: none;

  @media ${devices.mobile} {
    display: none;
  }
`;

// markup
const Layout = ({ children }) => {
  const cursorEl = useRef(null);
  const [cursorState, setCursorState] = useState(false);
  const [themeColor, setThemeColor] = useState(colors);

  // animate theme colors to specific colors
  const changeTheme = (color) => {
    setThemeColor({
      foreground: color.foreground,
      background: color.background,
      backgroundImage: color.backgroundImage,
    });
  };

  // animate reset to default color theme
  const resetTheme = () => setThemeColor(colors);

  const color = themeColor;

  // let custom cursor follow mouse
  const bindMouseEvents = (cursor) => {
    const followMouse = (e) => {
      cursor.current.style.top = `${e.clientY}px`;
      cursor.current.style.left = `${e.clientX}px`;
    };

    document.addEventListener('mousemove', (e) => followMouse(e));
    document.addEventListener('scroll', (e) => followMouse(e));

    const links = [...document.querySelectorAll('a')];
    if (links.length) {
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          setCursorState(true);
        });
        link.addEventListener('mouseleave', () => {
          setCursorState(false);
        });
      });
    }
  };

  useEffect(() => {
    if (cursorEl) bindMouseEvents(cursorEl);
  }, []);

  return (
    <ThemeContext.Provider value={{ color, changeTheme, resetTheme }}>
      <GlobalNormalizer />
      <GlobalStyles color={color} />
      <GlobalContainer />
      <ThemeContext.Consumer>
        {({ color }) => (
          <Cursor ref={cursorEl}>
            {!cursorState ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="12.5" r="12.5" fill={color.foreground} />
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="17.5"
                  stroke={color.foreground}
                  strokeWidth="2"
                />
              </svg>
            )}
          </Cursor>
        )}
      </ThemeContext.Consumer>
      <SEO />
      {children}
    </ThemeContext.Provider>
  );
};

export default Layout;
