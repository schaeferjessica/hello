import '../../../static/fonts.css';
import React, { useEffect, useRef, useState } from 'react';
import GlobalNormalizer from '../../styles/normalize';
import GlobalStyles from '../../styles/styles';
import GlobalContainer from '../../styles/container';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import ThemeContext from '../../styles/themecontext';
import { devices } from '../../styles/breakpoints';

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
  const [theme, setTheme] = useState('light');
  const [themeColor, setThemeColor] = useState(colors);

  // change between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // animate theme colors to spefic colors
  const changeTheme = (color) => {
    setThemeColor({
      light: {
        foreground: color.light.foreground,
        background: color.light.background,
        backgroundImage: color.light.backgroundImage,
      },
      dark: {
        foreground: color.dark.foreground,
        background: color.dark.background,
        backgroundImage: color.dark.backgroundImage,
      },
    });
  };

  // animate reset to default color theme
  const resetTheme = () => setThemeColor(colors);

  // create value for theme provider
  const color = theme === 'light' ? themeColor.light : themeColor.dark;

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
        const linkType = link.dataset.linktype;
        link.addEventListener('mouseenter', () => {
          setCursorState(linkType);
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
    <ThemeContext.Provider
      value={{ color, toggleTheme, changeTheme, resetTheme }}
    >
      <GlobalNormalizer />
      <GlobalStyles color={color} />
      <GlobalContainer />
      <ThemeContext.Consumer>
        {({ color }) => (
          <Cursor ref={cursorEl}>
            <svg
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: cursorState
                  ? 'translateX(-50%) translateY(-50%) scale(1)'
                  : 'translateX(-50%) translateY(-50%) scale(0.7)',
              }}
            >
              {/* circle */}
              <path
                fill={cursorState ? color.background : 'none'}
                stroke={color.foreground}
                strokeWidth={cursorState ? '0' : '2'}
                d="M26.5073 46.7835L25.3663 46.7689C22.6281 46.7337 19.9289 46.1151 17.4487 44.9545L15.2807 43.94C6.84139 39.9908 3.20145 29.9479 7.15064 21.5087C9.64491 16.1785 14.7364 12.5332 20.5859 11.8895L25.2013 11.3817C33.0248 10.5207 40.4674 14.9642 43.4214 22.2596C45.2564 26.7913 45.0955 31.9382 43.0233 36.3664C40.0371 42.7477 33.5522 46.8741 26.5073 46.7835Z"
              />
              {/* arrow - extern */}
              <path
                fill={cursorState === 'extern' ? color.foreground : 'none'}
                d="M31.4779 24C31.4779 23.5858 31.1421 23.25 30.7279 23.25L23.9779 23.25C23.5637 23.25 23.2279 23.5858 23.2279 24C23.2279 24.4142 23.5637 24.75 23.9779 24.75L29.9779 24.75L29.9779 30.75C29.9779 31.1642 30.3137 31.5 30.7279 31.5C31.1421 31.5 31.4779 31.1642 31.4779 30.75L31.4779 24ZM18.5303 37.2583L31.2583 24.5303L30.1976 23.4697L17.4697 36.1976L18.5303 37.2583Z"
              />
              {/* arrow - intern */}
              <path
                d="M28.833 38.8946C29.1258 39.1875 29.6007 39.1875 29.8936 38.8946L34.6666 34.1216C34.9595 33.8287 34.9595 33.3539 34.6666 33.061C34.3737 32.7681 33.8988 32.7681 33.6059 33.061L29.3633 37.3036L25.1206 33.061C24.8277 32.7681 24.3529 32.7681 24.06 33.061C23.7671 33.3538 23.7671 33.8287 24.06 34.1216L28.833 38.8946ZM28.6133 20.3643L28.6133 38.3643L30.1133 38.3643L30.1133 20.3643L28.6133 20.3643Z"
                fill={cursorState === 'intern' ? color.foreground : 'none'}
              />
            </svg>
          </Cursor>
        )}
      </ThemeContext.Consumer>
      {children}
    </ThemeContext.Provider>
  );
};

export default Layout;
