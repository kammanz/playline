import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getImage } from 'assets/headshots';
import styles from './players.module.scss';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json'
      );
      setPlayers(result.data.players);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {players.map(({ last_name, points }, i) => (
        <li
          key={i}
          style={{ zIndex: players.length - i }}
          className={styles.player}>
          <div className={styles.imageBackground}>
            <img
              className={styles.pic}
              src={getImage(last_name)}
              alt="player headshot"
            />
          </div>
          <div className={styles.playerName}>{last_name}</div>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>{points}</div>
          </div>
          <div className={styles.pointsText}>Pts</div>
        </li>
      ))}
    </ul>
  );
};

export default Players;
