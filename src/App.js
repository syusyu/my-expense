import React, { Component } from 'react';
import ButtonAppBar from './ButtonAppBar';
import Expense from './Expense';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileNames: this.loadFiles(),
            payloads: this.loadPayloads(),
        }
    }

    loadFiles() {
        return [];
    }
    updateFiles(e) {
        this.setState({
            fileNames: Array.from(e.target.files).map(file => file.name),
        });
    }

    loadPayloads() {
        return [];
    }
    updatePayloads(e) {
        this.extractPayloads(e.target.files).then(result => {
            this.setState({
                payloads: result,
            })
        });
    }
    extractPayloads(files) {
        return new Promise((resolve, reject) => {
            resolve(Array.from(files).map(file => {
                // const reader = new FileReader
                // reader.readAsText(file)
                return file.size;
            }));
        });
    }
    // calcExpense(file) {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader
    //         reader.readAsText(file)
    //     });
    // }

    changeFiles = e => {
        this.updateFiles(e);
        this.updatePayloads(e);
    }

    render() {
        return (
            <div>
                <ButtonAppBar fileNames={this.state.fileNames} changeFiles={(e) => this.changeFiles(e)}/>
                <Expense payloads={this.state.payloads}/>
            </div>
        );
    }
}

export default App