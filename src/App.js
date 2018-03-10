import React, { Component } from 'react';
import { interval } from 'rxjs/observable/interval';
import CounterContext from './CounterContext';

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
