import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #181818;
    color: #ffffff;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 2px;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
