import React, {Component} from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>TESTING REACT CODE</h1>);
    }
}

const appContainer = document.getElementById('app');
render(<App />, appContainer);
