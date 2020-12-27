import React, { useEffect, useRef, useState }  from "react";
import GlobalFonts from '../../fonts/fonts';
import GlobalNormalizer from '../../styles/styles';
import GlobalContainer from '../../styles/container';
import styled from 'styled-components';
import { colors } from '../../styles/color';

const Cursor = styled.div`
    width: 53px;
    height: 54px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    pointer-events: none;
  `;

// markup
const Layout = ({children}) => {
  const cursorEl = useRef(null);
  const [cursorState, setCursorState] = useState(false);

  const bindMouseEvents = cursor => {
    // TODO: check how many times this events gets binded
    document.addEventListener('mousemove', e => {
      cursor.current.style.top = `${e.clientY}px`;
      cursor.current.style.left = `${e.clientX}px`;
    });
  
    const links = [...document.querySelectorAll('a')];
    if (links.length) {
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          setCursorState(true);
        });
        link.addEventListener('mouseleave', () => {
          setCursorState(false);
        });
      });
    }
  }

  useEffect(() => {
    if (cursorEl) bindMouseEvents(cursorEl);
  }, []);

  return (
    <>
      <GlobalFonts />
      <GlobalNormalizer />
      <GlobalContainer />
      <Cursor ref={cursorEl}>
        <svg viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: cursorState ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0.7)' }}>
          {/* circle */}
          <path fill={cursorState ? colors.white : 'none'} stroke={colors.black} strokeWidth={cursorState ? '0' : '2'} d="M26.5073 46.7835L25.3663 46.7689C22.6281 46.7337 19.9289 46.1151 17.4487 44.9545L15.2807 43.94C6.84139 39.9908 3.20145 29.9479 7.15064 21.5087C9.64491 16.1785 14.7364 12.5332 20.5859 11.8895L25.2013 11.3817C33.0248 10.5207 40.4674 14.9642 43.4214 22.2596C45.2564 26.7913 45.0955 31.9382 43.0233 36.3664C40.0371 42.7477 33.5522 46.8741 26.5073 46.7835Z" />
          {/* arrow */}
          <path fill={cursorState ? colors.black : 'none'} d="M31.4779 24C31.4779 23.5858 31.1421 23.25 30.7279 23.25L23.9779 23.25C23.5637 23.25 23.2279 23.5858 23.2279 24C23.2279 24.4142 23.5637 24.75 23.9779 24.75L29.9779 24.75L29.9779 30.75C29.9779 31.1642 30.3137 31.5 30.7279 31.5C31.1421 31.5 31.4779 31.1642 31.4779 30.75L31.4779 24ZM18.5303 37.2583L31.2583 24.5303L30.1976 23.4697L17.4697 36.1976L18.5303 37.2583Z"/>
        </svg>
      </Cursor>
      {children}
    </>
  )
}

export default Layout;
