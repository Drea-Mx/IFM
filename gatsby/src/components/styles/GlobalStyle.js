import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    
    :root {
      --blue: #003764;
      --white: #ffffff;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--white);
        color: var(--blue);
        background-image: url('/background.jpg');
        background-position: center;
        background-size: cover;
        font-family: var(--regular);
        font-size: 16px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 680px) {
          font-size: 12px;
      }
    }
`
