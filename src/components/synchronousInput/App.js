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
    InputA=(inputValue)=>{
        this.setState({
            inputValue
        })
    }
    render() {
     
        return (
            <div>
                <InputA  InputA={this.InputA}/>
                <InputB  inputValue={this.state.inputValue}/>
            </div>
        );
    }
}

export default App;
