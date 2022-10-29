import AdvertPage from './components/AdvertPage/AdvertPage';
import SignInUpPage from './components/auth/SignInUpPage';
import Layout from './components/Layout/Layout.js';
import styles from './App.module.css';

function App() {
  return (
    <div className='app'>
      <Layout title='NODEPOP. Your second-hand sell/buy web' subTitle='Advertisements for you!'>
        <section className={styles.signSectionClass}>
          <SignInUpPage isSignIn='true' /> 
          <SignInUpPage />
        </section>
        <section>
          <AdvertPage />
        </section>
      </Layout>
    </div>
  );
}

export default App;
