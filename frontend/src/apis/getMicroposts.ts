import axios, { AxiosResponse } from 'axios';

type Microposts = {
  microposts: [Micropost];
};

type Micropost = {
  userId: string;
  micropost: string;
};

const getTimeline = async (id: string): Promise<AxiosResponse<Microposts>> => {
  // URLをサーバサイドのAPIにする
  const response = await axios
    .get(`http://localhost:3000/v1/microposts?id=${id}`)
    .then((res) => res);

  return response;
};

export default getTimeline;
