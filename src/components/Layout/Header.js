'use strict';

const Header = ({title}) => {
  return (
    <header>
      <h1>{title || 'NODEPOP. Your second-hand sell/buy web'}</h1>
      <nav>
        <button>Sign In</button>
        <button>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
