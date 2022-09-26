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
        <Link to="/products/almofadas">Almofadas</Link>
        <Link to="/products/bones">Bonés</Link>
        <Link to="/products/chaveiros">Chaveiros</Link>
        <Link to="/products/camisas">Camisas</Link>
        <Link to="/products/canecas">Canecas</Link>
        <Link to="/products/mousepads">Mousepads</Link>
      </nav>
    </Container>
  );
}
