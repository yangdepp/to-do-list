import React from 'react';
import Input from './Input'
import Style from './Style.css'
import Todolist from './Todolist';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['']
        }
    }
    addInput = (inputValue) => {
        const currentValue = this.state.list
        currentValue.push(inputValue)
        this.setState({
            list: currentValue
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Input inputs={this.addInput} />
                    <Todolist lists={this.state.list} />
                </div>
            </div>
        )
    }
}

export default App;
