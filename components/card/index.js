import React from 'react';

import Players from './players';

import AppleSVG from 'assets/icons/ios-app.svg';
import GoogleSVG from 'assets/icons/google-play.svg';
import NotifyMeSVG from 'assets/icons/notify-me.svg';
import ProgressSVG from 'assets/icons/progress.svg';
import DepositSVG from 'assets/icons/money-bag.svg';

import styles from './index.module.scss';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <img src={ProgressSVG} alt="full progress bar" />
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
          <img src={NotifyMeSVG} alt="notification bell" />
          <span>Notify Me</span>
        </button>
        <button>
          <img src={DepositSVG} alt="money bag" />
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
          <img src={AppleSVG} alt="apple store button" />
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer">
          <img src={GoogleSVG} alt="google play store" />
        </a>
      </div>
    </div>
  );
};

export default Card;
