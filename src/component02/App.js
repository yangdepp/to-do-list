import React from 'react';
import Input from './Input'
import Style from '../Style.css'
import Todolist from './Todolist';
import Tab from './Tab'
import TabList from './TabList';
import  Tabs  from '../component02/Tabs';
import  Todo  from '../component02/Todo';
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
                <div className='header'>
                    <Tab>
                       <Tabs></Tabs>
                    </Tab>


                    <Input inputs={this.addInput} />
                    <Todolist lists={this.state.list} />


                    <TabList>
                         <Todo></Todo>
                    </TabList>
                </div>
            </div>
        )
    }
}

export default App;
