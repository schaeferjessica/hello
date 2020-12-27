import { createGlobalStyle } from 'styled-components';
import WorkSansFont300Woff from './work-sans-v8-latin-300.woff';
import WorkSansFont300Woff2 from './work-sans-v8-latin-300.woff2';
import WorkSansFont400Woff from './work-sans-v8-latin-regular.woff';
import WorkSansFont400Woff2 from './work-sans-v8-latin-regular.woff2';
import WorkSansFont500Woff from './work-sans-v8-latin-500.woff';
import WorkSansFont500Woff2 from './work-sans-v8-latin-500.woff2';

export default createGlobalStyle`
    /* work-sans-300 - latin */
    @font-face {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('${WorkSansFont300Woff}') format('woff2'), /* Super Modern Browsers */
          url('${WorkSansFont300Woff2}') format('woff'); /* Modern Browsers */
    }

    /* work-sans-regular - latin */
    @font-face {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('${WorkSansFont400Woff}') format('woff2'), /* Super Modern Browsers */
          url('${WorkSansFont400Woff2}') format('woff'); /* Modern Browsers */
    }

    /* work-sans-500 - latin */
    @font-face {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('${WorkSansFont500Woff}') format('woff2'), /* Super Modern Browsers */
          url('${WorkSansFont500Woff2}') format('woff'); /* Modern Browsers */
    }

    html {
      font-weight: 400;
      font-size: 20px;
      font-family: 'Work Sans';
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
