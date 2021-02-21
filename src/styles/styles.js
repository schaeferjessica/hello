import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';
import { colorTransition } from './color';

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
    font-family: 'Inter', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
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
    font-weight: 400;
    font-family: 'Shippori Mincho', serif;
  }

  h1,
  h2 {
    font-size: 28px;

    @media ${devices.tablet} { 
      font-size: 24px;
    }
  }

  h3 {
    font-size: 26px;

    @media ${devices.tablet} { 
      font-size: 22px;
    }
  }

  a:focus-visible {
    outline:  ${(props) => props.color.foreground} solid 2px;
  }
`;
