import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Routing from "./Routing";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Routing />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
