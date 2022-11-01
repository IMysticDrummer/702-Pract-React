import AdvertsPage from "./components/AdvertsPage/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import styles from "./App.module.css";
import NewAdvertPage from "./components/AdvertsPage/NewAdvertPage.js";
import { Fragment, useState } from "react";
import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import AdvertPage from "./components/AdvertsPage/AdvertPage";
import RequireAuth from "./components/auth/RequireAuth";
import Page from "./components/Layout/Page";

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
          <Fragment>
            <Layout title={title} isLogged={isLogged} onLogout={setLogout} />
            <Page subTitle='Sign up / Sign in for a full experience!!' >
              <LoginPage onLogin={setLoginTrue} />
              <LoginPage isSignUp='true' />
            </Page>
          </Fragment>}
        />

        <Route path="/" element={<Navigate to='/adverts'/>} />
        
        <Route path="/adverts" element={<Layout title={title} isLogged={isLogged}
                onLogout={setLogout}/>} >

          <Route index element={
            <RequireAuth isLogged={isLogged}>
              <AdvertsPage
                subTitle='Wellcome to your commerce world!'
              />
            </RequireAuth>}
          />
        
          <Route path=":id" element={
            <RequireAuth  isLogged={isLogged}>
              <AdvertPage
                subTitle='Wellcome to your commerce world!'
              />
            </RequireAuth>}
          />
        
          <Route path="new" element={
            <RequireAuth  isLogged={isLogged}>
              <NewAdvertPage
                subTitle='What do you want to buy/sell?'
              />
            </RequireAuth>}
          />
        </Route>
        
        <Route path="/404" element={<div>404 | Not Found</div>} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
