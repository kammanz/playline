import React from 'react';

import Players from './players';

import styles from './index.module.scss';

const Card = () => {
  return (
    <div className={styles.container}>
      <Players />
    </div>
  );
};

export default Card;
