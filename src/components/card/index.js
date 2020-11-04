import React from 'react';

import Players from './players';

import apple from 'assets/icons/ios-app.svg';
import google from 'assets/icons/google-play.svg';
import notifyMe from 'assets/icons/notify-me.svg';
import progress from 'assets/icons/progress.svg';
import deposit from 'assets/icons/money-bag.svg';

import styles from './index.module.scss';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <img src={progress} alt="full progress bar" />
      </div>
      <div className={styles.success}>Your PlayLine is set!</div>
      <div className={styles.gameTime}>
        Come back at @7:30pm to track it live!
      </div>
      <div className={styles.lineGameTime} />
      <div className={styles.proTip}>
        Pro tip: You can manage your PlayLine's until they go live in the
        Upcoming area
      </div>
      <Players />
      <div className={styles.deposit}>
        <button>
          <img src={notifyMe} alt="notification bell" />
          <span>Notify Me</span>
        </button>
        <button>
          <img src={deposit} alt="money bag" />
          <span>Deposit</span>
        </button>
      </div>
      <div className={styles.lineDeposit} />
      <div className={styles.download}>Download the app</div>
      <div className={styles.appLinks}>
        <a
          href="https://apps.apple.com/ca/app/playline/id1265657853"
          target="_blank"
          rel="noreferrer">
          <img src={apple} alt="apple store button" />
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer">
          <img src={google} />
        </a>
      </div>
    </div>
  );
};

export default Card;
