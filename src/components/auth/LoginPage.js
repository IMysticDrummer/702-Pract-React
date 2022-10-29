'use strict';

import EnterElement from '../common/EnterElement';
import styles from './LoginPage.module.css';

const LoginPage = ({ isSignUp }) => {
  const buttonClickHandle = (event) => {
    event.preventDefault();
    console.log('Has hecho click');
  };
  return (
    <section className={styles.LoginPage}>
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      {!isSignUp ? (
        <article>
          <EnterElement
            labelText='Enter your username'
            type='text'
          />
          <EnterElement
            labelText='Enter your password'
            type='password'
          />
        </article>
      ) : (
        <article>
          <EnterElement
            labelText='Enter your email'
            type='email'
          />
          <EnterElement
            labelText='Enter your name'
            type='text'
          />
          <EnterElement
            labelText='Enter your username'
            type='text'
          />
          <EnterElement
            labelText='Enter your password'
            type='password'
          />
        </article>
      )}
      <button onClick={buttonClickHandle}>
        {isSignUp ? 'Login In' : 'Sign Up'}
      </button>
    </section>
  );
};

export default LoginPage;
