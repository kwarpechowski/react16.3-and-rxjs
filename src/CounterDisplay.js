import React from 'react';
import CounterContext from './CounterContext';

export const CounterDisplay = () => (
  <CounterContext.Consumer>
    {({value}) => value}
  </CounterContext.Consumer>
);
