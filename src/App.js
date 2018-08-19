import React, { Component } from 'react';
import ButtonAppBar from './ButtonAppBar';
import Expense from './Expense';

class App extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <Expense/>
            </div>
        );
    }
}

export default App