import { useState } from 'react';
import EnterElement from '../common/EnterElement';
import classNames from 'classnames';
import styles from './LoginPage.module.css';
import { login } from './service';

const LoginPage = ({ isSignUp, className, onLogin }) => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

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
    if (event.target.name === 'remember') {
      setRemember((remember) => !remember);
    }
  };

  const disableButton = () => {
    if (!isSignUp) {
      return !(email.length !== 0 && password.length !== 0 && !isFetching);
    }
    return !(
      username.length !== 0 &&
      password.length !== 0 &&
      email.length !== 0 &&
      name.length !== 0
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isSignUp) {
      try {
        setError(null);
        setIsFetching(true);
        await login({ email, password }, remember);
        onLogin();
      } catch (error) {
        setError(error);
      }
      setIsFetching(false);
    }
  };

  const handleErrorMessageClick = (event) => {
    event.preventDefault();
    setError(null);
  };

  return (
    <section className={classNames(styles.LoginPage, className)}>
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <EnterElement
              labelText='Enter your name'
              type='text'
              name='name'
              onChange={enterElementHandleChange}
              value={name}
            />
            <EnterElement
              labelText='Enter your username'
              type='text'
              name='username'
              onChange={enterElementHandleChange}
              value={username}
            />
          </div>
        )}
        <EnterElement
          labelText='Enter your email'
          type='email'
          name='email'
          onChange={enterElementHandleChange}
          value={email}
        />
        <EnterElement
          labelText='Enter your password'
          type='password'
          name='password'
          onChange={enterElementHandleChange}
          value={password}
        />
        {!isSignUp && (
          <EnterElement
            labelText='Remember me'
            type='checkbox'
            name='remember'
            onChange={enterElementHandleChange}
            checked={remember}
          />
        )}
        {!isSignUp && (
          <EnterElement
            labelText='Remember me'
            type='file'
            name='file'
            onChange={enterElementHandleChange}
          />
        )}
        <button
          type='submit'
          disabled={disableButton()}
        >
          {isSignUp ? 'Sign Up' : 'Login In'}
        </button>
      </form>
      {error && (
        <div
          className={styles.errorMessageClass}
          onClick={handleErrorMessageClick}
        >
          {error.message}
          {-error.status || 'Test your cable'}
        </div>
      )}
    </section>
  );
};

export default LoginPage;
