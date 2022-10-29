'use strict';

const Header = ({ title, ...props }) => {
  console.log(props.isLogged);
  return (
    <header>
      <h1>{title || 'NODEPOP. Your second-hand sell/buy web'}</h1>
      <nav>
        {props.isLogged && <button onClick={props.onLogout}>Sign Out</button>}
      </nav>
    </header>
  );
};

export default Header;
