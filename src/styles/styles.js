import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

export default createGlobalStyle`
  // adding own globals styles //----------------------------------------
  *,
  *::before,
  *::after {
    cursor: none !important;
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
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    font-family: 'Inter', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.color.foreground};
    background-color: ${(props) => props.color.background};

    @media ${devices.tablet} { 
      font-size: 16px;
    }

    @media ${devices.mobile} { 
      font-size: 14px;
    }
  }
`;
