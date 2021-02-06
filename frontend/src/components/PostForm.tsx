import React, { FC } from 'react';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';

import styled from 'styled-components';

const WideButton = styled(Button)`
  width: 100%;
  margin-bottom: 1vh;
`;

const PostForm: FC = () => (
  <Container>
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <WideButton variant="primary">投稿</WideButton>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default PostForm;
