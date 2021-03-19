import React, { FC, useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import MicropostElement from './MicropostElement';

import getMicroposts from '../apis/getMicroposts';

type MicropostsType = MicropostType[];

type MicropostType = {
  userId: string;
  userName: string;
  micropost: string;
  micropostId: string;
  createAt: string;
};

const Timeline: FC = () => {
  const [microposts, setMicroposts] = useState<MicropostsType>();
  const [error, setError] = useState('');

  useEffect(() => {
    const response = getMicroposts('123456');

    response
      .then(
        (m: AxiosResponse<MicropostType>) =>
          Array.isArray(m.data) && setMicroposts(m.data),
      )
      .catch(() =>
        setError(
          '通信エラーが発生しました。\n10分程、時間をおいてアクセスしてみてください',
        ),
      );
  }, []);

  return (
    <>
      <p>Micropost Feed</p>
      <hr />
      {error ? (
        <p>{error}</p>
      ) : (
        Array.isArray(microposts) &&
        microposts.map((micropost) => (
          <MicropostElement
            name={micropost.userName}
            micropost={micropost.micropost}
            createdAt={micropost.createAt}
            key={micropost.micropostId}
          />
        ))
      )}
    </>
  );
};

export default Timeline;
