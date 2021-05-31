import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';
import { colorTransition } from './color';

require('focus-visible');

export default createGlobalStyle`
  // adding own globals styles //----------------------------------------
  *,
  *::before,
  *::after {

    @media ${devices.mobileMin} {
      cursor: none !important;
    }
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }


  html {
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    font-family: 'IBM Plex Sans', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.color.foreground};
    background-color: ${(props) => props.color.background};
    background-image: ${(props) => props.color.backgroundImage};
    ${colorTransition}

    @media ${devices.tablet} { 
      font-size: 16px;
    }
  }

  
  h1,
  h2,
  h3 {
    font-family: 'IBM Plex Serif';
    font-weight: 300;
  }

  h1,
  h2 {
    font-size: 28px;

    @media ${devices.tablet} { 
      font-size: 24px;
    }

    @media ${devices.mobile} { 
      font-size: 21px;
    }
  }

  h3 {
    font-size: 26px;

    @media ${devices.tablet} { 
      font-size: 22px;
    }

    @media ${devices.mobile} { 
      font-size: 18px;
    }
  }

  * {
    outline: none;
  }


  p:not(:last-child) {
    margin-bottom: 18px;
  }

  a {
    color: ${(props) => props.color.foreground};
    text-decoration-thickness: 1.5px;
    text-underline-offset: 7px;
  }

  a.focus-visible,
  button.focus-visible {
    outline: 2px solid ${(props) => props.color.foreground};
  }

  button {
    font-family: 'IBM Plex Sans';
    font-size: 16px;
    border: 1.5px solid ${(props) => props.color.foreground};
    padding: 15px 30px
  }

  ul {
    list-style: square inside;
  }
`;
