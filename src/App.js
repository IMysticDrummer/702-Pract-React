import AdvertsPage from './components/AdvertsPage/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import Layout from './components/Layout/Layout.js';
import styles from './App.module.css';
import NewAdvertPage from './components/AdvertsPage/NewAdvertPage.js';

function App() {
  return (
    <div className='app'>
      <Layout
        title='NODEPOP. Your second-hand sell/buy web'
        subTitle='Sign In for a full experience!'
      >
        <section className={styles.signSectionClass}>
          <LoginPage isSignUp='true' />
          <LoginPage />
        </section>
      </Layout>
      <AdvertsPage />
      <NewAdvertPage />
    </div>
  );
}

export default App;
