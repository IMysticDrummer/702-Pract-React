'use stric';

import Header from './Header.js';
import classNames from 'classnames';

import styles from './Layout.module.css';

const Layout = ({ title, subTitle, children, className }) => {
  return (
    <main className={classNames(styles.layoutMainClass, className)}>
      <Header title={title}></Header>
      <h2>{subTitle}</h2>
      {children}
      <footer>@ 2022 Iván García & Keepcoding</footer>
    </main>
  );
};

export default Layout;
