import React from 'react';
import InputA from './InputA';
import InputB from './InputB';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    InputA = (inputValue) => {
        this.setState({
            inputValue
        })
    }
    InputB = (inputValue) => {
        this.setState({
            inputValue
        })
    }
    render() {
     
        return (
            <div>
                <InputA  inputValue={this.state.inputValue} InputA={this.InputA} />
                <InputB  inputValue={this.state.inputValue} InputB={this.InputB} />
            </div>
        );
    }
}

export default App;
