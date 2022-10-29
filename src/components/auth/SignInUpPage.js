'use strict';

import EnterElement from '../common/EnterElement';
import styles from './SignInUpPage.module.css';

const SignInUpPage = ({ isSignIn }) => {
  const buttonClickHandle = (event) => {
    event.preventDefault();
    console.log('Has hecho click');
  };
  return (
    <section className={styles.signInUpPage}>
      <h1>Sign {isSignIn ? 'In' : 'Up'}</h1>
      {isSignIn ? (
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
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </button>
    </section>
  );
};

export default SignInUpPage;
