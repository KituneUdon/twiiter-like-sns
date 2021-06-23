import React, { FC } from 'react';
import dayjs from 'dayjs';

import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import defaultProfileIcon from '../image/default_profile_icon.png';

type Props = {
  name: string;
  micropost: string;
  createdAt: string;
  key: number;
};

const Container = styled(Row)`
  padding: 3px;
  min-height: 64px;
`;

const Img = styled.img`
  height: 100%;
  max-width: 64px;
  max-height: 64px;
`;

const Timestamp = styled.span`
  color: gray;
  display: block;
`;

const MicropostElement: FC<Props> = ({ name, micropost, createdAt }) => {
  const nowDate = dayjs();
  const date = dayjs(createdAt);
  const diffDate = nowDate.diff(date, 'day');

  const displayDate = () => {
    let value;

    if (diffDate === 0) {
      if (nowDate.diff(date, 'second') < 60) {
        value = `${nowDate.diff(date, 'second')}秒前`;
      } else {
        value = `${nowDate.diff(date, 'hour')}時間前`;
      }
    } else if (diffDate < 7) {
      value = `${diffDate}日前`;
    } else if (date.format('YYYY') === nowDate.format('YYYY')) {
      value = date.format('M月D日');
    } else {
      value = date.format('YYYY年M月D日');
    }

    return value;
  };

  return (
    <Container>
      <Col xs={2} sm={2}>
        <Img src={defaultProfileIcon} alt="プロフィール画像" />
      </Col>
      <Col xs={10} sm={10}>
        <div>
          <a href="http://localhost:4000">{name}</a>
        </div>
        <div>
          <span>{micropost}</span>
        </div>
        <div>
          <Timestamp>{displayDate()}</Timestamp>
        </div>
      </Col>
    </Container>
  );
};

export default MicropostElement;
