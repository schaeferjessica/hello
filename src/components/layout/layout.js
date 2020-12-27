import * as React from "react";
import GlobalFonts from '../../fonts/fonts';
import GlobalNormalizer from '../../styles/styles';
import GlobalContainer from '../../styles/container';

// markup
const Layout = ({children}) => {
  return (
    <>
      <GlobalFonts />
      <GlobalNormalizer />
      <GlobalContainer />
      {children}
    </>
  )
}

export default Layout;
