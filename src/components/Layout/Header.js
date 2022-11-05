import { NavLink } from 'react-router-dom';
import { useLogin } from '../auth/context';
import './Header.css';

const Header = ({ title }) => {
  const { isLogged, setLogout: onLogout } = useLogin();
  return (
    <header>
      <h1>{title || 'NODEPOP. Your second-hand sell/buy web'}</h1>
      <nav className='header-nav'>
        {isLogged && (
          <NavLink
            to='/adverts/new'
            className='navLink'
            end
          >
            New Advertisement
          </NavLink>
        )}
        {isLogged && (
          <NavLink
            to='/adverts'
            className='navLink'
            end
          >
            Advertisements list
          </NavLink>
        )}
        {isLogged && <button onClick={onLogout}>Sign Out</button>}
      </nav>
    </header>
  );
};

export default Header;
