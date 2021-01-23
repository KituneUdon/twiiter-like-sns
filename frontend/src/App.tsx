import React, { FC } from 'react';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import PostForm from './components/PostForm';
import TimeLine from './components/Timeline';
import Header from './components/Header';

const App: FC = () => (
  <>
    <Header />
    <Container>
      <Row>
        <Col xs={4}>
          <Profile name="kituneudon" postedNumber={1} />
          <PostForm />
        </Col>
        <Col xs={8}>
          <TimeLine />
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
