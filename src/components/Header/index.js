import React from 'react';
import Logo from '../../Assets/Images/img/logo.png'; 
import './styles.css'; 
import 'material-symbols'; 

export function Header() {
    return (
      <div className="header"> 
        <div className="menu-logo">
          <img className="logo-img" src={Logo} alt="logo" />

        </div>
        <input className="logo-input" type="text" />
        <span className="material-symbols-rounded iconfill" >shopping_cart</span>
        <span className="material-symbols-rounded">menu</span> 
        
      </div>

    );
}
