import React from 'react';
import Logo from '../../assets/img/logo.png'; 
import './styles.css'; 
// import material from "material-symbols";



export function Header() {
    return (
      <div className="header"> 
        <div className="menu-logo">
          <img className="logo-img" src={Logo} alt="logo" />

        </div>
        <input className="logo-input" type="text" />
        <span className="material-symbols-rounded" >shopping_cart</span>
        <span className="material-symbols-rounded">menu</span> 
        
      </div>

    );
}
