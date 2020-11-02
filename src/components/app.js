import React from 'react';

import Card from './card';
import Nav from './nav';
import Header from './header';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Card />
      <Nav />
    </div>
  );
};

export default App;
