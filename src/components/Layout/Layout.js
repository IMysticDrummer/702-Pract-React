import Header from './Header.js';
import classNames from 'classnames';

import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ title, children, className, ...props }) => {
  return (
    <main className={classNames(styles.layoutMainClass, className)}>
      <Header title={title}></Header>
      <Outlet />
      <footer>@ 2022 Iván García & Keepcoding</footer>
    </main>
  );
};

export default Layout;
