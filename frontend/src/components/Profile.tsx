import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import profileIcon from '../image/default_profile_icon.png';
import UserInfo from './UserInfo';

const Img = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
`;

const Profile: FC = () => (
  <Container>
    <Row>
      <Col md={4} sm={12} xs={4}>
        <Img src={profileIcon} alt="プロフィール画像" />
      </Col>
      <Col md={8} sm={12} xs={8}>
        <p>kituneudon</p>
        <a href="http://localhost:4000">view my profile</a>
        <p>投稿数：10</p>
      </Col>
    </Row>
    <Row>
      <UserInfo />
    </Row>
  </Container>
);

export default Profile;
