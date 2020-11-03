import React, { useEffect, useState } from 'react';
import axios from 'axios';
import hashTable from 'assets/headshots';
import styles from './players.module.scss';

const Players = () => {
  const [data, setData] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json'
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  const playersLength = data.players.length;

  return (
    <ul className={styles.container}>
      {data.players.map((player, i) => (
        <li
          key={i}
          style={{ zIndex: playersLength - i }}
          className={styles.box}>
          <div className={styles.imageBackground}>
            <img className={styles.pic} src={hashTable.get(player.last_name)} />
          </div>
          <div className={styles.playerName}>{player.last_name}</div>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>{player.points}</div>
          </div>
          <div className={styles.pointsText}>Pts</div>
        </li>
      ))}
    </ul>
  );
};

export default Players;
