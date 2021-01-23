import React, { FC } from 'react';

import { Container } from './Styles';

import profileImage from '../image/default_profile_image.png';
import UserInfo from './UserInfo';

type Props = {
  name: string
}

const Profile: FC<Props> = ({ name }) => (
  <>
    <Container>
      <img src={profileImage} alt="プロフィール画像" width="64" height="64" />
      <div>
        <p>{name}</p>
        <a href="http://localhost:4000">view my profile</a>
        <p>投稿数を表示</p>
      </div>
    </Container>
    <UserInfo followerNumber={10} followingNumber={20} />
  </>
)

export default Profile;