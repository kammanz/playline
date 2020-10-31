import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Players = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json'
      );
      console.log(result.data);
      //   setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Players;
