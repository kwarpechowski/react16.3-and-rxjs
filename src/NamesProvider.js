import React, { Component } from 'react';
import { interval } from 'rxjs/observable/interval';
import { NamesContext } from './conetxt';

export class NamesProvider extends Component {

  static interval_time = 500;

  state = {
    value: 0
  };

  componentWillMount() {
    this.observer = interval(NamesProvider.interval_time)
      .filter(val => val % 3 === 0)
      .take(10)
      .map(val => `names = ${val}`);
    this.observer.subscribe(value =>
      this.setState({ value })
    );
  }

  render = () => (<NamesContext.Provider
      value={{
        ...this.state,
        observer: this.observer
      }}
    >
      {this.props.children}
    </NamesContext.Provider>
  )
}
