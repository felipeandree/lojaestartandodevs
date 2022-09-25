import "./Header.css";
import "material-symbols";
import { Link, NavLink} from 'react-router-dom'

export function Header({ setMenuIsVisible }) {
  return (
    <div className='header'>
      <div className='menu-logo'>
      <Link to="/"><img className='logo-img' src='/img/logo.png' alt='logo' /></Link>
        <h1 className='home-title'>LOJA</h1>
      </div>
      <input className='logo-input' placeholder='Pesquisar' type='search' />

      <div className='header-icons'>
        <span className='material-symbols-outlined iconfill'>
          shopping_cart
        </span>

        <span
          className='material-symbols-outlined'
          onClick={() => setMenuIsVisible(true)}
        >
          menu
        </span>
      </div>
    </div>
  );
}
