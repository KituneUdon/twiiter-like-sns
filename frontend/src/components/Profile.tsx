import React, { FC } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import profileIcon from '../image/default_profile_icon.png';
import UserInfo from './UserInfo';

type Props = {
  name: string;
};

const Profile: FC<Props> = ({ name }) => (
  <Container>
    <Row>
      <Col>
        <img src={profileIcon} alt="プロフィール画像" width="64" height="64" />
      </Col>
      <Col>
        <p>{name}</p>
        <a href="http://localhost:4000">view my profile</a>
        <p>投稿数を表示</p>
      </Col>
    </Row>
    <Row>
      <UserInfo followerNumber={10} followingNumber={20} />
    </Row>
  </Container>
);

export default Profile;
