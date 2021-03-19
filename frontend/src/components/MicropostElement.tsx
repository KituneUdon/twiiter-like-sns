import React, { FC } from 'react';

import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import defaultProfileIcon from '../image/default_profile_icon.png';

type Props = {
  name: string;
  micropost: string;
  createdAt: string;
  key: string;
};

const Container = styled.div`
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

const TimelineElement: FC<Props> = ({ name, micropost, createdAt, key }) => (
  <Container key={key}>
    <Row>
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
          <Timestamp>投稿日：{createdAt}</Timestamp>
        </div>
      </Col>
    </Row>
  </Container>
);

export default TimelineElement;
