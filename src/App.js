import React, { Component } from 'react';
import { interval } from 'rxjs/observable/interval';
import { CounterContext } from './conetxt';

export class App extends Component {

  static interval_time = 1000;

  state = {
    isActive: true,
    value: null
  };

  componentWillMount() {
    this.observer = interval(App.interval_time)
      .take(60)
      .filter(val => val % 2 === 0)
      .scan((acc, curr) =>  acc + curr, 0)
      .map(val => `counter = ${val}`);
    this._start();
  }

  _start() {
    this.subscription = this.observer.subscribe(value =>
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
        actions: { toggleAction },
        observer: this.observer
      }}
    >
      {children}
    </Provider>
  }
}
