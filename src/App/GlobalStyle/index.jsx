import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --h1-font-size: 13vw;
    --h2-font-size: 8.4vw;
    --h3-font-size: 1.2rem;
    --p-font-size: 1.4rem;
    --a-font-size: 1.2rem;

    --separator-font-size: var(--h1-font-size);

    @media all and (min-width: 768px) {
      --h1-font-size: 6.5rem;
      --h2-font-size: 5vw;
      --h3-font-size: 1.8rem;
    }

    @media all and (min-width: 1601px) {
      --h1-font-size: 8rem;
      --h3-font-size: 1.4rem;
    }

    @media all and (min-width: 1601px) {
      --h1-font-size: 8rem;
      --h3-font-size: 1.4rem;
    }

    @media all and (max-width: 1024px) and (max-height: 520px) {
      --h1-font-size: 8vw;
      --p-font-size: 1.13rem;
    }
  }

  body {
    margin: 0;
    width: 100%;
    height: 100%;

    background:aliceblue;
  }
`;

export default GlobalStyle;
