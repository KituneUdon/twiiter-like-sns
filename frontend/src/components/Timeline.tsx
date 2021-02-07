import React, { FC, useState, useEffect } from 'react';

import TimelineElement from './TimelineElement';

import getMicroposts from '../apis/getMicroposts';

const Timeline: FC = () => {
  const [microposts, setMicroposts] = useState();

  // APIからデータを取得してstateに格納する処理を記載する
  useEffect(() => {
    const response = getMicroposts();

    response.then((m) => Array.isArray(m) && setMicroposts(m));
  }, []);

  return (
    <>
      <p>タイムライン</p>
      <hr />
      <TimelineElement name="kituneudon" />
    </>
  );
};

export default Timeline;
