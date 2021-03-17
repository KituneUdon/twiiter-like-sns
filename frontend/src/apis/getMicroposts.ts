import axios from 'axios';

// type MicropostsType = MicropostType[];

// type MicropostType = {
//   user: string;
//   micropost: string;
// };

// eslint-disable-next-line
const getTimeline = async (id: string) => {
  // URLをサーバサイドのAPIにする
  const response = await axios
    .get(`http://localhost:3000/v1/microposts?id=${id}`)
    .then((res) => res);

  return response;
};

export default getTimeline;
