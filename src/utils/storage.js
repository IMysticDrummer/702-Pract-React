import { clear } from '@testing-library/user-event/dist/clear';

const storage = {
  get(key) {
    let value = localStorage.getItem(key);
    !value ? (value = null) : (value = JSON.parse(value));
    return value;
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};
export default storage;
