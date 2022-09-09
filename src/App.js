import { useEffect } from 'react';
import Home from './Pages/Home/Home';

function App() {
  
  useEffect(()=> {
    (async () => {
      const res = await fetch('/products')
      const resJson = await res.json()
      console.log(resJson)
  })()
  },[])
  return (
  <Home/>
  
  );
}

export default App;
