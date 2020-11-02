import React from 'react';

import logo from 'assets/logo/logo@2x.png';

import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
    </div>
  );
};

export default Header;
