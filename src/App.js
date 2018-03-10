import React, { Component } from 'react';
import { interval } from 'rxjs/observable/interval';
import { CounterContext } from './CounterContext';

export class App extends Component {

  static interval_time = 1000;

  state = {
    isActive: true,
    value: null
  };

  componentWillMount() {
    this.interval = interval(App.interval_time)
      .filter(val => val % 2 === 0)
      .scan((acc, curr) =>  acc + curr, 0)
      .map(val => `Hello from interval - ${val}`);
    this._start();
  }

  _start() {
    this.subscription = this.interval.subscribe(value =>
      this.setState({ value })
    );
  };

  toggleAction = () => {
    if (this.state.isActive) {
      this.subscription.unsubscribe();
      this.setState({
        isActive: false
      });
    } else {
      this.setState({
        isActive: true
      });
      this._start();
    }
  };

  render() {
    const { Provider } = CounterContext;
    const { toggleAction, state, props: { children } } = this;

    return <Provider
      value={{
        ...state,
        actions: { toggleAction }
      }}
    >
      {children}
    </Provider>
  }
}
