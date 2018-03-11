import React from 'react';
import { NamesContext } from './conetxt';

export const NamesDisplay = () => (
  <NamesContext.Consumer>
    {({value}) => value}
  </NamesContext.Consumer>
);
