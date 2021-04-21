import React, { FC, useState } from 'react';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import PostForm from './components/PostForm';
import Microposts from './components/Micropost';
import Header from './components/Header';

const App: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Header />
      {errorMessage && <p>{errorMessage}</p>}
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <Profile />
            <PostForm id='123456' setErrorMessage={setErrorMessage}/>
          </Col>
          <Col xs={12} sm={8}>
            <Microposts />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
