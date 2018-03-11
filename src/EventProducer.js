import React, { Component, Fragment } from 'react';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';

const SHOW_ACTION = 'show';
const HIDE_ACTION = 'hide';

export class EventProducer extends Component {

  state  = {
    isShow: false
  };

  componentWillMount() {
    Observable
      .create(observer => this.observer = observer)
      .pipe(distinctUntilChanged())
      .subscribe(value => this.setState({
        isShow: value === SHOW_ACTION
      }));
  }

  onClick = (action) => () => this.observer.next(action);

  render() {
    return <Fragment>
      <button onClick={this.onClick(SHOW_ACTION)}>
        Show
      </button>
      <button onClick={this.onClick(HIDE_ACTION)}>
        Hide
      </button>
      <div>
        {this.state.isShow.toString()}
      </div>
    </Fragment>
  }

}
