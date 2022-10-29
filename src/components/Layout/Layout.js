'use stric';

import Header from './Header.js';

const Layout = ({title, subTitle, children}) => {
  return (
    <main>
      <Header title={title}></Header>
      <h2>{subTitle}</h2>
      <section>{children}</section>
      <footer></footer>
    </main>
    
  );
};

export default Layout;
