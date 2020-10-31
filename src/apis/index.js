import axios from 'axios';

const axiosOne = async () => {
  return await axios.get(
    'https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json'
  );
};
console.log('here', axiosOne);

// const axiosBase = axios.create({
//   baseUrl: 'https://playline-dev-test.s3-us-west-2.amazonaws.com',
// });

// const axiosData = () =>
//   axiosBase
//     .get('/playline-test.json')
//     .then((response) => {
//       console.log(response);
//       return response.data.players;
//     })
//     .catch((error) => console.log(error));

export default axiosOne;
