import React from 'react';
import Input from './Input'
import Style from '../Style.css'
import Todolist from './Todolist';
import Span from './Span';
import Content from './Content';
// import Actived from './Actived';
// import All from './All';
// import Completed from './Completed';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            s: [1]
        }
    }
    addInput = (inputValue) => {
        const currentValue = this.state.list
        currentValue.push(inputValue)
        this.setState({
            list: currentValue
        })

    }
    callback = (s) => {
        this.setState({
            s
        })
    }
    render() {

        return (
            <div>
                <div className='header'>
                    <Span spans={this.callback} />
                    <Input inputs={this.addInput} />
                    <Content value={this.state.s} />
                    <Todolist lists={this.state.list} />
                    <div>
                        <span className='two'>{this.state.list.length}items left</span>
                        <span className='one'>{this.state.list.length}Clear Completed</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
