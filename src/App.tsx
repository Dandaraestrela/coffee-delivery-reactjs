import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContextProvider>
          <Toaster position="top-right" />
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
