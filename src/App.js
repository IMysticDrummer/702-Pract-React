import AdvertPage from './components/AdvertPage/AdvertPage';
import SignInUpPage from './components/auth/SignInUpPage';
import './App.css';

function App() {
  return (
    <div className='app'>
      hello react!!
      <main>
        <section className='singSectionClass'>
          <SignInUpPage isSignIn='true'/>
          <SignInUpPage />
        </section>
        <AdvertPage />
      </main>
    </div>
  );
}

export default App;
