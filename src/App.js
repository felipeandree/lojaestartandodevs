import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './assets/styles/globalStyles';
import { RouterProducts } from './routes/productsRoutes';
import 'material-symbols/outlined.css';
import { ScrollToTop } from './components/ScrollToTop/scrollToTop';



function App() {
  return (
    <>
      <GlobalStyle />
      < Routes />
      <ScrollToTop />
      <RouterProducts/> 
    </>

  );
}

export default App;
