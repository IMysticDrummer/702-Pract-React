import { Fragment } from 'react';
import styled from 'styled-components';
import styles from './Page.module.css';

const Page = ({ subTitle, children }) => {
  return (
    <div className={styles.pageClass}>
      <h2>{subTitle}</h2>
      {children}
    </div>
  );
};

const StyledPage = styled(Page)``;

export default StyledPage;
