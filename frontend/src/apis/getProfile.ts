import axios from 'axios';

// eslint-disable-next-line
const getTimeline = async (id: string) => {
  // URLをサーバサイドのAPIにする
  const response = await axios
    .get(`http://127.0.0.1:3100/v1/userprofile?userId=${id}`)
    .then((res) => res);

  return response;
};

export default getTimeline;
