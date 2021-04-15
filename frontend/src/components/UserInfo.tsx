import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  followerCount: number;
  followingCount: number;
}

const UserInfo: FC<Props> = ({followerCount, followingCount}) => (
  <Container>
    <Row>
      <Col>
        <p>{followerCount}</p>
        <p>follower</p>
      </Col>
      <Col>
        <p>{followingCount}</p>
        <p>following</p>
      </Col>
    </Row>
  </Container>
);

export default UserInfo;
