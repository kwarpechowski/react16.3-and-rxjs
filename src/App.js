import React, { Component } from 'react';
import { interval } from 'rxjs/observable/interval';
import CounterContext from './CounterContext';

export class App extends Component {

    state = {
        isActive: true,
        value: null
    };

    componentWillMount() {
        this.interval = interval(1000).map(val => `Hello from interval - ${val}`);
        this.start();
    }

    start() {
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
            this.start();
        }
    };

    render() {
        const { Provider } = CounterContext;
        const { toggleAction } = this;

        return <Provider value={{
                ...this.state,
                actions: { toggleAction }
            }}>
            {this.props.children}
            </Provider>
    }
}