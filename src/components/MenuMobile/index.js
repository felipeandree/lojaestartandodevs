/* eslint-disable */
import { Container } from "./styles";
import "material-symbols";
import { useEffect } from "react";
import { Link, NavLink} from 'react-router-dom'

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <span className='material-symbols-outlined iconfill closeTag' onClick={()=>setMenuIsVisible(false)}>close</span>
      <nav className='nav-mobile'>
        <Link to="/">Início</Link>
        <Link to="/almofadas">Almofadas</Link>
        <Link to="/bones">Bonés</Link>
        <Link to="/chaveiros">Chaveiros</Link>
        <Link to="/camisas">Camisas</Link>
        <Link to="/canecas">Canecas</Link>
        <Link to="/mousepads">Mousepads</Link>
      </nav>
    </Container>
  );
}
