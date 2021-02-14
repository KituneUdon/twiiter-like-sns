import React, { FC, useState, useEffect } from 'react';

import TimelineElement from './TimelineElement';

import getMicroposts from '../apis/getMicroposts';

type TypeMicroposts = {
  user: string;
  micropost: string;
};

const Timeline: FC = () => {
  const [microposts, setMicroposts] = useState<TypeMicroposts[]>();

  // APIからデータを取得してstateに格納する処理を記載する
  useEffect(() => {
    const response = getMicroposts();

    response
      .then((m) => Array.isArray(m) && setMicroposts(m))
      .catch(() =>
        alert(
          '通信エラーが発生しました。\n10分程、時間をおいてアクセスしてみてください',
        ),
      );
  }, []);

  return (
    <>
      <p>タイムライン</p>
      <hr />
      {Array.isArray(microposts) &&
        microposts.map((micropost) => (
          <TimelineElement
            name={micropost.user}
            micropost={micropost.micropost}
          />
        ))}
    </>
  );
};

export default Timeline;
