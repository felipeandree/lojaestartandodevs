/* eslint-disable */
import { Container } from "./style";
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
        <Link to="/produtos/almofadas">Almofadas</Link>
        <Link to="/produtos/bones">Bonés</Link>
        <Link to="/produtos/chaveiros">Chaveiros</Link>
        <Link to="/produtos/camisas">Camisas</Link>
        <Link to="/produtos/canecas">Canecas</Link>
        <Link to="/produtos/mousepads">Mousepads</Link>
      </nav>
    </Container>
  );
}
