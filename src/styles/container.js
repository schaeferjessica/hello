import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

export default createGlobalStyle`
  .container {
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 40px;
    padding-right: 40px;
    

    @media ${devices.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

export const moduleSpace = `
  margin-top: 160px;

  @media ${devices.tablet} { 
    margin-top: 80px;
  }

  @media ${devices.mobile} {
    margin-top: 50px;
  }
`;
