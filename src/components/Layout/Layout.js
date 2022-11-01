import Header from './Header.js';
import classNames from 'classnames';

import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ title, children, className, ...props }) => {
  return (
    <main className={classNames(styles.layoutMainClass, className)}>
      <Header
        title={title}
        isLogged={props.isLogged}
        onLogout={props.onLogout}
      ></Header>
      <main>
        <Outlet />
      </main>
      <footer>@ 2022 Iván García & Keepcoding</footer>
    </main>
  );
};

export default Layout;
