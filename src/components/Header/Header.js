import React, {useState} from "react";
import "./Header.css";
import { MenuMobile} from "../MenuMobile/MenuMobile.js"
import "material-symbols";

export function Header() {

  const[menuIsVisible, setMenuIsVisible] = useState(true)
  return (
    <div className='header'>
      <div className='menu-logo'>
        <img className='logo-img' src='/img/logo.png' alt='logo' />
        <h1 className='home-title'>LOJA</h1>
      </div>
      <input className='logo-input' placeholder='Pesquisar' type='search' />

      <div className='header-icons'>
        <span className='material-symbols-outlined iconfill'>
          shopping_cart
        </span>
        <MenuMobile
          menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}/>
        <span className='material-symbols-outlined'>menu</span>
      </div>
    </div>
  );
}
