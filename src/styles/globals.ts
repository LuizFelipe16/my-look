import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --white: #fff;

    --gray-900: #171923;
    --gray-700: #2D3748;
    --gray-600: #4A5568;
    --gray-300: #B3B5C6;
    --gray-200: #B3B5C6;
    --gray-100: #D1D2DC;
    --gray-50: #fff;

    --white-200: #edf2fc;
    --gray-400: #606163;
    --gray-800: #212121;
    --orange: #ff4321;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    overflow-x: hidden;
    background-color: var(--white-200);
  }

  button {
    cursor: pointer;
  }

  div {
    display: flex;
  }

  *::selection {
    color: #000;
    background-color: var(--orange)
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background: var(--white-200);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--orange);
    border-radius: 2rem;
  }
`;