import React from 'react';
import Routes from './routes/index'
import RouterProducts from './routes/products';
import GlobalStyle from './assets/styles/gkobalStyles'
import 'material-symbols/outlined.css';



function App() {
  return (
    <>
      <GlobalStyle />
      < Routes />
      < RouterProducts />
    </>

  );
}

export default App;
