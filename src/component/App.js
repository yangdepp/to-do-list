import React from 'react';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['1']
        }
    }
    changeSpanOne() {
        this.setState({
            list:[...this.state.list,this.state.list]

        })
    }
    changeSpanTwo() {
       
    }
    changeSpanThree() {
        
    }
    render() {
        return (
            <div>
                <div className='top'>
                    <div className='header'>
                        <span onClick={this.changeSpanOne.bind(this)}>All</span>
                        <span onClick={this.changeSpanTwo.bind(this)}>Acived</span>
                        <span onClick={this.changeSpanThree.bind(this)}>Compelted</span>
                    </div>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                    <span className='foot-left'>Items</span>
                    <span className='foot-right'>Completed</span>
                </div>
            </div>

        )
    }
}

export default App;
