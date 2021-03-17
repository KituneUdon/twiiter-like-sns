import React, { FC, useState, useEffect } from 'react';

import TimelineElement from './MicropostElement';

import getMicroposts from '../apis/getMicroposts';

type TypeMicroposts = {
  user: string;
  micropost: string;
};

const Timeline: FC = () => {
  const [microposts, setMicroposts] = useState<TypeMicroposts[]>();
  const [error, setError] = useState('');

  // APIからデータを取得してstateに格納する処理を記載する
  useEffect(() => {
    const response = getMicroposts('123456');

    response
      .then((m) => Array.isArray(m) && setMicroposts(m))
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
          <TimelineElement
            name={micropost.user}
            micropost={micropost.micropost}
          />
        ))
      )}
    </>
  );
};

export default Timeline;
