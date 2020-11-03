import React from 'react';

import Card from './card';
import Footer from './footer';
import Header from './header';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
