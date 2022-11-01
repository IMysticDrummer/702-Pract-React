import AdvertsPage from "./components/AdvertsPage/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import styles from "./App.module.css";
import NewAdvertPage from "./components/AdvertsPage/NewAdvertPage.js";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import AdvertPage from "./components/AdvertsPage/AdvertPage";
import RequireAuth from "./components/auth/RqeuireAuth";

function App({ isInitiallyLogged, onLogout }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const setLoginTrue = () => setIsLogged(true);
  const setLogout = () => {
    onLogout();
    setIsLogged(false);
  };
  const title = "NODEPOP. Your second-hand sell/buy web";

  return (
    <div className='app'>
      <Routes>
        <Route path="/login" element={
          <section className={styles.signSectionClass}>
            <Layout title={title} subTitle='Sign up / Sign in for a full experience!!'>
              <LoginPage onLogin={setLoginTrue} />
              <LoginPage isSignUp='true' />
            </Layout>
          </section>}
        />
        <Route path="/" element={<Navigate to='/adverts'/>} />
        
          <Route path="/adverts" element={
            <RequireAuth isLogged={isLogged}>
              <AdvertsPage
                title={title}
                subTitle='Wellcome to your commerce world!'
                isLogged={isLogged}
                onLogout={setLogout}
              />
            </RequireAuth>}
          />
        
          <Route path="/adverts/:id" element={
            <RequireAuth  isLogged={isLogged}>
              <AdvertPage
                title={title}
                subTitle='Wellcome to your commerce world!'
                isLogged={isLogged}
                onLogout={setLogout}
              />
            </RequireAuth>}
          />
        
          <Route path="/adverts/new" element={
            <RequireAuth  isLogged={isLogged}>
              <NewAdvertPage
                title={title}
                subTitle='What do you want to buy/sell?'
                isLogged={isLogged}
                onLogout={setLogout}          
              />
            </RequireAuth>}
          />
        
        <Route path="/404" element={<div>404 | Not Found</div>} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
