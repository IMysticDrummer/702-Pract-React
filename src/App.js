import AdvertPage from './components/AdvertPage/AdvertPage';
import LoginPage from './components/auth/LoginPage';
import './App.css';

function App() {
  return (
    <div className='app'>
      hello react!!
      <main>
        <LoginPage />
        <AdvertPage />
      </main>
    </div>
  );
}

export default App;
