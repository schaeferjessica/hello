
import React, { useContext } from "react";
import ThemeContext from '../styles/themecontext';

const Main = () => {
  const color = useContext(ThemeContext);
  return (
    <main>Hallo Welt {color.foreground}</main>
  );
}

export default Main