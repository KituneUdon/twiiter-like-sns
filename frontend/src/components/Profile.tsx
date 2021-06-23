import React, { FC, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { AxiosResponse } from 'axios';

import profileIcon from '../image/default_profile_icon.png';
import UserInfo from './UserInfo';
import getProfile from '../apis/getProfile'
import UserProfile from '../types/UserProfile';

const Img = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
`;

type UserprofileResponseType = {
  user: {
    displayName: "",
    followerCount: 0,
    followingCount: 0,
    postedNumber: 0,
  }
}

const Profile: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const userprofileDefaultValue: UserProfile = {
    displayName: "",
    followerCount: 0,
    followingCount: 0,
    postedNumber: 0,
  }
  const [userprofile, setUserprofile] = useState(userprofileDefaultValue)

  useEffect(() => {
    const response = getProfile('123456');

    response.then((data: AxiosResponse<UserprofileResponseType>) => {
      setUserprofile({
        displayName: data.data.user.displayName,
        followerCount: data.data.user.followerCount,
        followingCount: data.data.user.followingCount,
        postedNumber: data.data.user.postedNumber
      })
    }).catch(() => {
      setErrorMessage('通信エラーが発生しました。')
    })
  }, [])

  return (
    <Container>
      {errorMessage && <p>{errorMessage}</p>}
      <Row>
        <Col md={4} sm={12} xs={4}>
          <Img src={profileIcon} alt="プロフィール画像" />
        </Col>
        <Col md={8} sm={12} xs={8}>
          <p>{userprofile.displayName}</p>
          <a href="http://localhost:4000">view my profile</a>
          <p>投稿数：{userprofile.postedNumber}</p>
        </Col>
      </Row>
      <Row>
        <UserInfo followerCount={userprofile.followerCount} followingCount={userprofile.followingCount} />
      </Row>
    </Container>
  );
}

export default Profile;
