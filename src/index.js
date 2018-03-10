import React from 'react';
import 'rxjs';
import ReactDOM from 'react-dom';

import { App } from './App';
import { CounterButton } from './CounterButton';
import { CounterDisplay } from './CounterDisplay';

ReactDOM.render(
    <App>
        <CounterButton />
        <h1>
            <CounterDisplay />
        </h1>
    </App>,
    document.getElementById('app')
);
