import React from 'react';
import { MergeContext } from './conetxt';

export const MergeDisplay = () => (
  <MergeContext.Consumer>
    {data => data}
  </MergeContext.Consumer>
);
