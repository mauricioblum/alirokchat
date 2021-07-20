import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #ffffff;
    color: ${(props) => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;
