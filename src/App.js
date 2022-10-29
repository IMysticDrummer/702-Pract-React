import AdvertsPage from './components/AdvertsPage/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import Layout from './components/Layout/Layout.js';
import styles from './App.module.css';
import NewAdvertPage from './components/AdvertsPage/NewAdvertPage.js';
import { setAuthorizationHeader } from './api/client.js';
import { useEffect, useState } from 'react';
import storage from './utils/storage';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const setLoginTrue = () => setIsLogged(true);

  useEffect(() => {
    const token = storage.get('token');
    if (token) {
      setAuthorizationHeader(token);
      setLoginTrue();
    }
  }, []);

  return (
    <div className='app'>
      <Layout
        title='NODEPOP. Your second-hand sell/buy web'
        subTitle='Sign In for a full experience!'
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
