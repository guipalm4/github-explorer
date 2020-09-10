import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smothing: antialiased;
  }

  body, input , button {
    font: 16px Kufam, cursive, sans-serif;
  }

  #root {
    max-width: 960px;
  }

  button {
    cursor: pointer;
  }

  `;