import React, { FC } from 'react';

import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import defaultProfileIcon from '../image/default_profile_icon.png';

type Props = {
  name: string;
  micropost: string;
  key: string;
};

const Container = styled.div`
  padding: 3px;
`;

const TimelineElement: FC<Props> = ({ name, micropost, key }) => (
  <Container key={key}>
    <Row xs={4}>
      <Col>
        <img
          src={defaultProfileIcon}
          alt="プロフィール画像"
          width="64"
          height="64"
        />
      </Col>
      <Col xs={8}>
        <a href="http://localhost:4000">{name}</a>
        <p>{micropost}</p>
      </Col>
    </Row>
  </Container>
);

export default TimelineElement;
