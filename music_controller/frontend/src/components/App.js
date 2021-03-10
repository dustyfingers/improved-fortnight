import React, {Component} from 'react';
import { render } from 'react-dom';

// import pages
import HomePage from './pages/HomePage';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="center">
                <HomePage />
            </div>
        );
    }
}

const appContainer = document.getElementById('app');
render(<App />, appContainer);
