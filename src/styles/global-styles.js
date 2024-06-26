import { createGlobalStyle } from "styled-components";
import { StyleConstants } from "./variables";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${StyleConstants.COLORS.BLACK};
  font-feature-settings: "pnum" on, "lnum" on;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;
  height: 100%;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

li{
  list-style: none;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${StyleConstants.COLORS.RED};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${StyleConstants.COLORS.RED_OPACITY};
}
`;
