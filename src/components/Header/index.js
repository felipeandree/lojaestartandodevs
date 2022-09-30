// eslint-disable-next-line no-unused-vars
import { Link, useLocation, NavLink } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { ShoppingCart, HamburgerMenu, SearchIcon, Logo, ArrowBack, HeaderIcons } from './style';

export function Header({ setMenuIsVisible, props }) {


  // const {pathname} = useLocation();
  /**/
  // let logoHeader = {pathname} === '/' ? <Logo src='/img/logo.png' href="/"alt='logo' /> : <Link to="/"><ArrowBack /> </Link>


  return (
    <div className='header'>
      <div className='menu-logo'>

        {/* {logoHeader} */}

        {/* {props.showBack && <ArrowBack />} */}
        <NavLink to="/"><Logo src='/img/logo.png' alt='logo' /></NavLink>
        <NavLink to="/"><h1 className='home-title'>LOJA</h1></NavLink>
      </div>
      <input className='logo-input' placeholder='Pesquisar' type='search' />

      <HeaderIcons>
        <NavLink to="/carrinho" id="menuIcons"><ShoppingCart /></NavLink>
        <NavLink onClick={() => setMenuIsVisible(true)} id="menuIcons"> <HamburgerMenu /></NavLink>
      </HeaderIcons>
    </div>
  );
}
