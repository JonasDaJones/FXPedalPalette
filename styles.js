import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root {
  --light-font: whitesmoke;
  --dark-font: #0a0908;
  --dark: #0a0908;
  --dark-alternative: #22333b;
  --semi-dark: #5e503f;
  --semi-light: #c6ac8f;
  --light-alternative: #eae0d5;
  --light: whitesmoke;
}
  body {
    margin: 0;
    font-family: system-ui;
  }
`;