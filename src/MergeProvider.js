import React, { Component, Fragment } from 'react';
import { CounterContext, NamesContext, MergeContext } from './conetxt';
import { merge } from 'rxjs/observable/merge';

export class MergeProvider extends Component {

  isRunned = false;

  state = {
    data: []
  };

  setObservers(counterObserver, nameObserver) {
    if (!this.isRunned) {
      this.isRunned = true;
      merge(counterObserver, nameObserver)
        .subscribe(val => {
          this.setState(({data}) => ({
            data: [...data, val]
          }))
        })
    }
  }


  render = () => (
    <Fragment>
      <CounterContext.Consumer>
        {({observer: counter}) => (
          <NamesContext.Consumer>
            {({observer: name}) => this.setObservers(counter, name)}
          </NamesContext.Consumer>
        )}
      </CounterContext.Consumer>
      <MergeContext.Provider value={this.state.data.join(', ')}>
        {this.props.children}
      </MergeContext.Provider>
    </Fragment>
  );
}
