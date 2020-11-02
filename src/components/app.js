import React from 'react';

import Card from './card/index';
import Nav from './nav/nav';

import logo from 'assets/logo/logo@2x.png';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
      </div>
      <Card />
      <Nav />
    </div>
  );
};

export default App;
