import React, { FC } from 'react';

import TimelineElement from './TimelineElement';

const Timeline: FC = () => (
  <>
    <p>タイムライン</p>
    <hr />
    <TimelineElement name="kituneudon" />
  </>
);

export default Timeline;
