import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

export default createGlobalStyle`
  .container {
    max-width: 2000px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;

    @media ${devices.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
