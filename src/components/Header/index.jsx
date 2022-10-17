// @ts-nocheck
/* eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { MenuMobile } from "../MenuMobile";
import {
  ShoppingCart,
  HamburgerMenu,
  SearchIcon,
  Logo,
  ArrowBack,
  HeaderIcons,
} from "./styles";

export function Header(props) {

  const {pathname} = useLocation();
  let logoHeader = pathname === '/' ? <Logo><img src="/img/logo.png" alt="logo" alt="" />
  <h1 className="home-title">LOJA</h1></Logo> : <Link to="/"><ArrowBack /> </Link>

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header">
      <MenuMobile menuIsVisible={openMenu} setMenuIsVisible={setOpenMenu} />
      <div className="menu-logo">
       

        {/* {props.showBack && <ArrowBack />} */}
        <NavLink to="/">
           {logoHeader}
          
        </NavLink>
      
      </div>
      <input className="logo-input" placeholder="Pesquisar" type="search" />

      <HeaderIcons>
        <NavLink to="/carrinho" id="menuIcons">
          <ShoppingCart />{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
           ''
          )}
        </NavLink>
        
        <NavLink onClick={() => setOpenMenu(true)} id="menuIcons">
          <HamburgerMenu />
        </NavLink>
      </HeaderIcons>
    </div>
  );
}
