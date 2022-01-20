import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Routing from "./Routing";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyles />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
