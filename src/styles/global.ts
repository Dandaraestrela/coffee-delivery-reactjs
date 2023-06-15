import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  
}

body,
input,
textarea,
button {
  font-weight: 400;
  font-size: 1rem;
}

button{
  cursor: pointer;
}

input, button{
   :focus,
  :focus-within {
    outline-style: solid;
    outline-color: ${({ theme: { colors } }) => colors.yellowDark} !important;
  }
}

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }
`;
