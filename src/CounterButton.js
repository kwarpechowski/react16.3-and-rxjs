import React from 'react';
import { CounterContext } from './conetxt';

export const CounterButton = () => (
  <CounterContext.Consumer>
    {({isActive, actions: { toggleAction }}) => (
      <button onClick={toggleAction}>
        {isActive ? 'cancel': 'start'}
      </button>
    )}
  </CounterContext.Consumer>
);
