import React, { FC } from 'react';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import PostForm from './components/PostForm';
import TimeLine from './components/Micropost';
import Header from './components/Header';

const App: FC = () => (
  <>
    <Header />
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Profile />
          <PostForm />
        </Col>
        <Col xs={12} sm={8}>
          <TimeLine />
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
