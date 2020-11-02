import React from 'react';

import Players from './players';

import apple from 'assets/icons/ios-app.svg';
import google from 'assets/icons/google-play.svg';
import notifyMe from 'assets/icons/notify-me.svg';
// import notifyMe from
import deposit from 'assets/icons/money-bag.svg';

import styles from './index.module.scss';

const Card = () => {
  return (
    <div className={styles.container}>
      <div>Your PlayLine is set!</div>
      <div>Come back at 7:30pm to track it live!</div>
      <div className={styles.proTip}>
        Pro tip: You can manage your PlayLine's until they go live in the
        Upcoming area
      </div>
      <Players />
      <div>
        <button>
          <img src={notifyMe} />
          Notify Me
        </button>
        <button>
          <img src={deposit} />
          Deposit
        </button>
      </div>
      <div>Download the app</div>
      <div>
        <a
          href="https://apps.apple.com/ca/app/playline/id1265657853"
          target="_blank">
          <img src={apple} />
        </a>
        <a href="https://play.google.com/store" target="_blank">
          <img src={google} />
        </a>
      </div>
    </div>
  );
};

export default Card;
