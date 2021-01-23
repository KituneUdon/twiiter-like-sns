import React, { FC } from 'react';
import './App.css';

import Profile from './components/Profile';
import PostForm from './components/PostForm';

const App: FC = () => (
  <>
    <Profile name="kituneudon" />
    <PostForm />
  </>
);

export default App;
