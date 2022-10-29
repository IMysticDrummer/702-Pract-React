'use strict';

import client, { setAuthorizationHeader } from '../../api/client';

export const login = (credentials, remember) => {
  return client.post('/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    remember && localStorage.setItem('token', JSON.stringify(accessToken));
  });
};
