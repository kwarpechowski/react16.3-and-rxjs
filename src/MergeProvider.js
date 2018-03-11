import React, { Component } from 'react';
import { MergeContext } from './conetxt';
import { merge } from 'rxjs/observable/merge';

export class MergeProvider extends Component {

  state = {
    data: [],
    isCompleted: false
  };

  static defaultProps = {
    contexts: []
  };

  componentWillMount() {
    const observers = this.props.contexts.map(({Consumer: { currentValue: { observer } }}) => observer);

    merge(...observers)
      .subscribe(val => {
        this.setState(({data}) => ({
          data: [val, ...data]
        }));
      }, () => null, () => {
        this.setState({
          isCompleted: true
        })
      })
  }


  render() {
    return <MergeContext.Provider value={this.state}>
      {this.props.children}
    </MergeContext.Provider>
  }
}
