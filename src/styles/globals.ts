import { createGlobalStyle } from 'styled-components';
import { theme } from '../_app';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --white: #fff;

    --gray-900: #171923;
    --gray-800: #1A202C;
    --gray-700: #2D3748;
    --gray-600: #4A5568;
    --gray-300: #B3B5C6;
    --gray-200: #B3B5C6;
    --gray-100: #D1D2DC;
    --gray-50: #fff;

    --swiper-navigation-size: 22px;
    --swiper-navigation-color: ${theme.colors.primary};
    
    --swiper-pagination-color: ${theme.colors.primary};
    /* --swiper-pagination-bullet-size: 8px;
    --swiper-pagination-bullet-width: 8px;
    --swiper-pagination-bullet-height: 8px;
    --swiper-pagination-bullet-inactive-color: #000;
    --swiper-pagination-bullet-inactive-opacity: 0.2;
    --swiper-pagination-bullet-opacity: 1;
    --swiper-pagination-bullet-horizontal-gap: 4px;
    --swiper-pagination-bullet-vertical-gap: 6px; */
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
    background-color: ${theme.colors.primary};
  }

  button {
    cursor: pointer;
  }

  div {
    display: flex;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background: var(--gray-900);
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 2rem;
  }
`;