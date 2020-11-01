import axios from 'axios';

const axiosOne = async () => {
  return await axios.get(
    'https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json'
  );
};
console.log('here', axiosOne);

export default axiosOne;
