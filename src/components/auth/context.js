import { createContext } from 'react';

const LoginContext = createContext();

export const LoginContextProvider = LoginContext.Provider;

export const LoginContextConsumer = LoginContext.Consumer;

LoginContext.displayName = 'Logged';

export default LoginContext;
