import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const UserInfo: FC = () => (
  <Container>
    <Row>
      <Col>
        <p>10</p>
        <p>follower</p>
      </Col>
      <Col>
        <p>20</p>
        <p>following</p>
      </Col>
    </Row>
  </Container>
);

export default UserInfo;
