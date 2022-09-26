import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, HamburgerMenu, SearchIcon } from './styles'



export function Header({ setMenuIsVisible }) {
  return (
    <div className='header'>
      <div className='menu-logo'>
        <Link to="/"><img className='logo-img' src='/img/logo.png' alt='logo' /></Link>
        <Link to="/"><h1 className='home-title'>LOJA</h1></Link>
      </div>
      <input className='logo-input' placeholder='Pesquisar' type='search' />

      <div className='header-icons'>
        <Link to="/carrinho"><ShoppingCart /></Link>
        <HamburgerMenu onClick={() => setMenuIsVisible(true)} />

      </div>
    </div>
  );
}
