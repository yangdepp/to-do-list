import React from 'react';
import Input from './Input'
import Style from '../Style.css'
import Todolist from './Todolist';
import Span from '../Span';
import All from './All';
import Actived from './Actived';
import Completed from './Completed';
import Content from '../Content';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [''],
            item: 0
        }
    }
    addInput = (inputValue) => {
        const currentValue = this.state.list
        currentValue.push(inputValue)
        this.setState({
            list: currentValue
        })
    }
    handleChange=(index)=>{
        this.setState({
            item:index
        })
    }
    render() {
        return (
            <div>
                <div className='header'>
                    <Span handleChange={this.handleChange}/>
                    <Input inputs={this.addInput} />
                    <Todolist lists={this.state.list} />
                    <All all={this.state.item} />
                    <Actived actived={this.state.item} />
                    <Completed completed={this.state.item} />
                </div>
            </div>
        )
    }
}

export default App;
