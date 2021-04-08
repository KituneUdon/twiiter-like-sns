import React, { FC, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { AxiosResponse } from 'axios';

import profileIcon from '../image/default_profile_icon.png';
import UserInfo from './UserInfo';
import getProfile from '../apis/getProfile'

const Img = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
`;

type userprofileType = {
  displayName: string;
  follower: number;
  following: number;
  postedNumber: number;
}

const Profile: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [postedNumber, setPostedNumner] = useState(0);

  useEffect(() => {
    const response = getProfile('123456');

    response.then((data: AxiosResponse<userprofileType>) => {
      setDisplayName(data.data.displayName);
      setFollower(data.data.follower);
      setFollowing(data.data.following);
      setPostedNumner(data.data.postedNumber);
    }).catch(() => {
      setErrorMessage('通信エラーが発生しました。')
    })
  })

  return (
    <Container>
      {errorMessage && <p>{errorMessage}</p>}
      <Row>
        <Col md={4} sm={12} xs={4}>
          <Img src={profileIcon} alt="プロフィール画像" />
        </Col>
        <Col md={8} sm={12} xs={8}>
          <p>{displayName}</p>
          <a href="http://localhost:4000">view my profile</a>
          <p>投稿数：{postedNumber}</p>
        </Col>
      </Row>
      <Row>
        <UserInfo follower={follower} following={following} />
      </Row>
    </Container>
  );
}

export default Profile;
