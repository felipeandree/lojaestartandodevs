import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './assets/styles/globalStyles';
import { ScrollToTop } from './components/ScrollToTop';
import 'material-symbols/outlined.css';
import { CartContextProvider } from 'contexts/cart';

function App() {
  return (
    <>
      <GlobalStyle />
        <CartContextProvider >
        < Routes />
        </CartContextProvider >
      <ScrollToTop />
    </>

  );
}

export default App;
