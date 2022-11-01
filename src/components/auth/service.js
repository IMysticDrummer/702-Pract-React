import client, { setAuthorizationHeader } from '../../api/client';
import storage from '../../utils/storage';

export const login = (credentials, remember) => {
  return client.post('/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    remember && storage.set('token', accessToken);
  });
};
