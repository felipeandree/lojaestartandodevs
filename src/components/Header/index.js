import React from 'react';
import '../../assets/img/logo.png'; 
import './styles.css'; 
import 'material-symbols'; 

export function Header() {
    return (
      <div className="header"> 
        <div className="menu-logo">
          <img className="logo-img" src='Logo.png' alt="logo" />
        </div>

        <input className="input-header" type="text" placeholder='Pesquisar'/>

        <span class="material-symbols-outlined">shopping_cart</span>
        <span class="material-symbols-outlined"> menu </span> 
        
      </div>

    );
}
