import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  followingNumber: number;
  followerNumber: number;
}

const UserInfo: FC<Props> = ({ followingNumber, followerNumber }) => (
  <Container>
    <Row>
      <Col>
        <p>{followingNumber}</p>
        <p>follower</p>
      </Col>
      <Col>
        <p>{followerNumber}</p>
        <p>following</p>
      </Col>
    </Row>
  </Container>
)

export default UserInfo;