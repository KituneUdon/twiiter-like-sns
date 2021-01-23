import React, { FC } from 'react';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import PostForm from './components/PostForm';
import TimeLine from './components/Timeline';

const App: FC = () => (
  <Container>
    <Row>
      <Col xs={4}>
        <Profile name="kituneudon" />
        <PostForm />
      </Col>
      <Col xs={8}>
        <TimeLine />
      </Col>
    </Row>
  </Container>
);

export default App;
