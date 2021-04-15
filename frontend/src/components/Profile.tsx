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
  followerCount: number;
  followingCount: number;
  postedNumber: number;
}

const Profile: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const userprofileDefaultValue: userprofileType = {
    displayName: "",
    followerCount: 0,
    followingCount: 0,
    postedNumber: 0,
  }
  const [userprofile, setUserprofile] = useState(userprofileDefaultValue)

  useEffect(() => {
    const response = getProfile('123456');

    response.then((data: AxiosResponse<userprofileType>) => {
      setUserprofile({
        displayName: data.data.displayName,
        followerCount: data.data.followerCount,
        followingCount: data.data.followingCount,
        postedNumber: data.data.postedNumber
      })
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
