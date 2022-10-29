'use strict';

import { useState } from 'react';
import EnterElement from '../common/EnterElement';
import classNames from 'classnames';
import styles from './LoginPage.module.css';

const LoginPage = ({ isSignUp, className }) => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);

  const enterElementHandleChange = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
  };

  const disableButton = () => {
    if (!isSignUp) {
      return !(username.length!==0 && password.length!==0);
    }
    return !(username.length!==0 && password.length!==0 && email.length!==0 && name.length!==0);
  };

  // useEffect(() => {

  //    enableButton();
  //  }, []);

  // const buttonClickHandle = (event) => {
  //   event.preventDefault();
  //   console.log('Has hecho click');

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <section className={classNames(styles.LoginPage, className)}>
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <EnterElement
              labelText='Enter your email'
              type='email'
              name='email'
              onChange={enterElementHandleChange}
              value={email}
            />
            <EnterElement
              labelText='Enter your name'
              type='text'
              name='name'
              onChange={enterElementHandleChange}
              value={name}
            />
          </div>
        )}
        <EnterElement
          labelText='Enter your username'
          type='text'
          name='username'
          onChange={enterElementHandleChange}
          value={username}
        />
        <EnterElement
          labelText='Enter your password'
          type='password'
          name='password'
          onChange={enterElementHandleChange}
          value={password}
        />
        <button
          type='submit'
          disabled={disableButton()}
        >
          {isSignUp ? 'Sign Up' : 'Login In'}
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
