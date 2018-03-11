import React from 'react';
import { MergeContext } from './conetxt';

export const MergeDisplay = () => (
  <MergeContext.Consumer>
    {({data, isCompleted}) => (
      <div>
        <p>Status: {isCompleted ? 'ended': 'running'}</p>
        <p>{data.join(', ')}</p>
      </div>
    )}
  </MergeContext.Consumer>
);
