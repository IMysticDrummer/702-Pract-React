import AdvertsPage from './components/AdvertsPage/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import Layout from './components/Layout/Layout.js';
import styles from './App.module.css';
import NewAdvertPage from './components/AdvertsPage/NewAdvertPage.js';
import { useState } from 'react';
import { setAuthorizationHeader } from './api/client';
import storage from './utils/storage';

function App({ isInitiallyLogged, onLogout }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const setLoginTrue = () => setIsLogged(true);
  const setLogout = () => {
    onLogout();
    setIsLogged(false);
  };

  return (
    <div className='app'>
      <Layout
        title='NODEPOP. Your second-hand sell/buy web'
        subTitle='Sign In for a full experience!'
        isLogged={isLogged}
        onLogout={setLogout}
      ></Layout>

      {!isLogged ? (
        <section className={styles.signSectionClass}>
          <LoginPage isSignUp='true' />
          <LoginPage onLogin={setLoginTrue} />
        </section>
      ) : (
        <AdvertsPage />
      )}
    </div>
  );
}

export default App;
