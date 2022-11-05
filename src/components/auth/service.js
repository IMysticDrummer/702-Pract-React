import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storage';

export const login = (credentials, remember) => {
  return client.post('/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    remember && storage.set('token', accessToken);
  });
};

export const checkLogged = () => {
  const accessToken = storage.get('token');
  setAuthorizationHeader(accessToken);
  return accessToken;
};

/**
 * Removes the authorisation
 */
export const handleLogout = () => {
  removeAuthorizationHeader();
  storage.remove('token');
};
