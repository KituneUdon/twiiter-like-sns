import React, { FC, useState } from 'react';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';

import styled from 'styled-components';

import postMicropost from '../apis/postMicropost'

const WideButton = styled(Button)`
  width: 100%;
  margin-bottom: 1vh;
`;

type Props = {
  id: string;
  setErrorMessage: (errorMessage: string) => void;
}

const PostForm: FC<Props> = ({id, setErrorMessage}) => {
  const [formText, setFormText] = useState('');

  const handlePostMicropost = () => {
    postMicropost(id, formText).catch(() => setErrorMessage('通信エラーが発生しました。10分程、時間をおいてアクセスしてみてください。'))
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={3} onChange={(e) => setFormText(e.target.value)} />
            </Form.Group>
            <WideButton variant="primary" onClick={() => handlePostMicropost()}>投稿</WideButton>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PostForm;
