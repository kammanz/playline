import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './players.module.css';

// import * as roster from 'assets/headshots/';
import headshotArray from 'assets/headshots/headshots';
// import * as roster from 'assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';
// import roster2 from '../../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';

// console.log(roster[2], 'roster[2]');
// console.log(roster2, 'roster2[2]');

const Players = () => {
  const [data, setData] = useState({ players: [] });

  // const Icon2 = Icon;
  // console.log('apic', aPic);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json'
      );
      console.log('result: ', result.data.players);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul className={styles.navigation}>
      {data.players.map((player, i) => (
        <li key={i} className={styles.box}>
          <img src={headshotArray[0]} />
          {player.last_name}
          <br />
          {player.points}
          <div>pts</div>
        </li>
      ))}
    </ul>
  );
};

export default Players;
