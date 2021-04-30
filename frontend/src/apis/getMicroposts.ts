import axios from 'axios';

// eslint-disable-next-line
const getTimeline = async (id: string) => {
  // URLをサーバサイドのAPIにする
  const response = await axios
    .get(`http://localhost:3000/v1/microposts?userId=${id}`)
    .then((res) => res);

  return response;
};

export default getTimeline;
