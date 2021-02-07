import axios from 'axios';

const getTimeline = async () => {
  // URLをサーバサイドのAPIにする
  const response = await axios.get('http://localhost:3000/').then((res) => res);

  return response;
};

export default getTimeline;
