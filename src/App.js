import AdvertsPage from './components/AdvertsPage/AdvertsPage';
import SignInUpPage from './components/auth/SignInUpPage';
import Layout from './components/Layout/Layout.js';
import styles from './App.module.css';

function App() {
  return (
    <div className='app'>
      <Layout
        title='NODEPOP. Your second-hand sell/buy web'
        subTitle='Sign In for a full experience!'
      >
        <section className={styles.signSectionClass}>
          <SignInUpPage isSignIn='true' />
          <SignInUpPage />
        </section>
      </Layout>
      <AdvertsPage />
      
    </div>
  );
}

export default App;
