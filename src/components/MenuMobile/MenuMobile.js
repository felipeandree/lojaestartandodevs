/* eslint-disable */
import { Container } from "../MenuMobile/styles";
import "material-symbols";
import { useEffect } from "react";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <span className='material-symbols-outlined iconfill closeTag' onClick={()=>setMenuIsVisible(false)}>close</span>
      <nav>
        <a href='#'>Canecas</a>
        <a href='#'>Almofadas</a>
        <a href='#'>Camisas</a>
      </nav>
    </Container>
  );
}
