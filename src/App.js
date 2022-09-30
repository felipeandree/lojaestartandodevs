import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './assets/styles/globalStyles';
import 'material-symbols/outlined.css';
import { ScrollToTop } from './components/ScrollToTop/';



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
