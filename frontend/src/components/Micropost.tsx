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

type Props = {
  errorMessage: string
  setErrorMessage: (message: string) => void
}

const Timeline: FC<Props> = ({errorMessage, setErrorMessage}) => {
  const [microposts, setMicroposts] = useState<MicropostsType>();

  useEffect(() => {
    const response = getMicroposts('123456');

    response
      .then(
        (m: AxiosResponse<MicropostType>) =>
          Array.isArray(m.data) && setMicroposts(m.data),
      )
      .catch(() =>
        setErrorMessage(
          '通信エラーが発生しました。10分程、時間をおいてアクセスしてみてください。',
        ),
      );
  }, [setErrorMessage]);

  return (
    <>
      <p>Micropost Feed</p>
      <hr />
      {errorMessage && (
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
