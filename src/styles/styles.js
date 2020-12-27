import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // Combination of own rules and
  // necolas/normalize.css (https://github.com/necolas/normalize.css/)

  // Resetting margins, paddings, and borders //---------------------------------
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  // Layout & box sizing //------------------------------------------------------
  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  // Typography //---------------------------------------------------------------
  * {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }

  // Forms //--------------------------------------------------------------------
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    font-family: inherit;
    line-height: 1.15;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  // Resetting specific element styles //----------------------------------------
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  picture {
    display: block;
  }

  img {
    display: block;
    height: auto;
    border-style: none;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::after,
  blockquote::before,
  q::after,
  q::before {
    content: '';
    content: none;
  }

  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  button {
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    cursor: pointer;
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
`;
