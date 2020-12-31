import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

export default createGlobalStyle`
  .container {
    max-width: 2000px;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;
    

    @media ${devices.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

export const moduleSpace = `
  margin-top: 80px;

  @media ${devices.mobile} {
    margin-top: 40px;
  }
`;
