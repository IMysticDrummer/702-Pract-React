import { createContext, useContext } from 'react';

const LoginContext = createContext();

export const LoginContextProvider = LoginContext.Provider;

export const LoginContextConsumer = LoginContext.Consumer;

LoginContext.displayName = 'Logged';

/**
 * Custom
 */
export const useLogin = () => {
  const value = useContext(LoginContext);
  return value;
};

export default LoginContext;
