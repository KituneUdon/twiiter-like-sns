import React, { FC } from 'react';

import { Container, ContainerItem } from './Styles';

type Props = {
  followingNumber: number;
  followerNumber: number;
}

const UserInfo: FC<Props> = ({ followingNumber, followerNumber }) => (
  <Container>
    <ContainerItem>
      <p>{followingNumber}</p>
      <p>follower</p>
    </ContainerItem>
    <ContainerItem>
      <p>{followerNumber}</p>
      <p>following</p>
    </ContainerItem>
  </Container>
)

export default UserInfo;