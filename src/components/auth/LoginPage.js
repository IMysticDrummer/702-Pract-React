'use strict';

import EnterElement from '../common/EnterElement';

const LoginPage = () => {
  return (
    <section class='loginPage'>
      <EnterElement
        labelText='Enter your username'
        type='text'
      />
      <EnterElement
        labelText='Enter your password'
        type='password'
      />
    </section>
  );
};

export default LoginPage;
