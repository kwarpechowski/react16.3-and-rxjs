import React from 'react';
import { CounterContext } from './conetxt';

export const CounterDisplay = () => (
  <CounterContext.Consumer>
    {({value}) => value}
  </CounterContext.Consumer>
);
