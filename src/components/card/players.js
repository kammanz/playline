import React, { useEffect, useState } from 'react';
import axios from 'axios';
import hashTable from 'assets/headshots/headshots';
import styles from './players.module.scss';

console.log('hashTable: ', hashTable);

const Players = () => {
  const [data, setData] = useState({ players: [] });

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
    <ul className={styles.container}>
      {data.players.map((player, i) => (
        <li key={i} style={{ zIndex: 10 - i }} className={styles.box}>
          <div className={styles.imageBackground}>
            <img className={styles.pic} src={hashTable.get(player.last_name)} />
          </div>
          <div className={styles.playerName}>{player.last_name}</div>
          <div className={styles.points}>{player.points}</div>
          <div className={styles.pointsText}>pts</div>
        </li>
      ))}
    </ul>
  );
};

export default Players;
