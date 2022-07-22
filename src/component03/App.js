import React from 'react';
import Actived from './Actived';
import All from './All';
import Completed from './Completed';
import Input from './Input';
import Span from './Span';
import Style from './Style.css'
import Bottom from './Bottom';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            items:[]
        }
    }
    addInput = (inputValue) => {
        const currentValue = this.state.list
        currentValue.push(inputValue)
        this.setState({
            list: currentValue
        })

    }
    handleIndex=(items)=>{
        this.setState({
            items
        })
    }
    render() {
        return (
            <div className='one'>
                <Span spans={this.handleIndex}/>
                <Input inputs={this.addInput} />
                <All all={this.state} />
                <Actived actived={this.state} />
                <Completed completed={this.state} />
                <Bottom value={this.state.list} />
            </div>
        )
    }
}

export default App;
