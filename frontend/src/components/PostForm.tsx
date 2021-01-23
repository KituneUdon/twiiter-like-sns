import React, { FC } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import styled from 'styled-components';

const TextArea = styled.textarea`
  display: block;
`;

const PostForm: FC = () => (
  <Container>
    <form>
      <TextArea />
      <Button variant="primary">投稿</Button>
    </form>
  </Container>
)

export default PostForm;