import React from 'react';

import Card from './card/index';
import Nav from './nav/nav';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Card />
      <Nav />
    </div>
  );
};

export default App;
