import axios from 'axios';

// eslint-disable-next-line
const postMicropost = async (id: string, micropost: string) => {
  const data = {
    id,
    micropost
  }
  // URLをサーバサイドのAPIにする
  const response = await axios
    .post(`http://localhost:3000/v1/microposts`, data)
    .then((res) => res);

  return response;
};

export default postMicropost;
