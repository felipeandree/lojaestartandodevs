import React from 'react';
import Logo from '../../Assets/Images/img/logo.png'; 
import './Header.css'; 
import 'material-symbols'; 

export function Header() {
    return (
      <div className="header"> 
        <div className="menu-logo">
          <img className="logo-img" src={Logo} alt="logo" />
          <h1 className="home-title">LOJA</h1>
        </div>
        <input className="logo-input" placeholder="Pesquisar" type="search"  /> 
        
        
        <div className="header-icons">
        <span className="material-symbols-outlined iconfill" >shopping_cart</span>
        <span className="material-symbols-outlined">menu</span> 
        </div>
        
      </div>

    );
}
