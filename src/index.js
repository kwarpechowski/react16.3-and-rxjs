import React from 'react';
import 'rxjs';
import ReactDOM from 'react-dom';

import { App } from './App';
import { CounterButton } from './CounterButton';
import { CounterDisplay } from './CounterDisplay';
import { NamesProvider } from './NamesProvider';
import { NamesDisplay } from './NameDisplay';
import { MergeProvider } from './MergeProvider';
import { MergeDisplay } from './MergeDisplay';
import { CounterContext, NamesContext } from './conetxt';
import { EventProducer } from './EventProducer';

ReactDOM.render(
  <NamesProvider>
    <App>
      <CounterButton />
      <h1>
        <CounterDisplay /> - <NamesDisplay />
      </h1>
      <MergeProvider contexts={[CounterContext, NamesContext]}>
        <div style={{border: '1px solid red'}}>
          <p>Inside merge provider</p>
          <MergeDisplay />
        </div>
      </MergeProvider>
      <EventProducer />
    </App>
  </NamesProvider>,
  document.getElementById('app')
);
