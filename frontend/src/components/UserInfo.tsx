import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  follower: number;
  following: number;
}

const UserInfo: FC<Props> = ({follower, following}) => (
  <Container>
    <Row>
      <Col>
        <p>{follower}</p>
        <p>follower</p>
      </Col>
      <Col>
        <p>{following}</p>
        <p>following</p>
      </Col>
    </Row>
  </Container>
);

export default UserInfo;
