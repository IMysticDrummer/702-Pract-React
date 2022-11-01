

const Header = ({ title, isLogged, onLogout }) => {
  return (
    <header>
      <h1>{title || 'NODEPOP. Your second-hand sell/buy web'}</h1>
      <nav>
        {isLogged && <button onClick={onLogout}>Sign Out</button>}
      </nav>
    </header>
  );
};

export default Header;
