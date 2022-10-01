import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './assets/styles/globalStyles';
import { ScrollToTop } from './components/ScrollToTop/';
import 'material-symbols/outlined.css';

function App() {
  return (
    <>
      <GlobalStyle />
      < Routes />
      <ScrollToTop />
    </>

  );
}

export default App;
