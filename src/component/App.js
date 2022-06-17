import React from 'react';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputValue: ''
        }
    }
    handleChange() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleContent(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render() {
        return (
            <div>
                <div className='top'>
                    <div className='header'>
                        <span style={{ backgroundColor: 'red' }}>All</span>
                        <span style={{ backgroundColor: 'rgb(32, 221, 45)' }}>Acived</span>
                        <span style={{ backgroundColor: 'blue' }}>Compelted</span>
                    </div>
                    <div className='body'>
                        <span>
                            <input value={this.state.inputValue} onChange={this.handleContent.bind(this)} placeholder="接下来要做什么" />
                            <button onClick={this.handleChange.bind(this)}>add</button>
                            <ul>

                                {
                                    this.state.list.map((item, index) => {
                                return  <li index={index} onClick={this.handleDelete.bind(this, index)} key={index}>
                                            <span>{item}</span>
                                            <button className='iconfont icon-xuanxiangqiaguanbianniu'></button>
                                        </li>

                                    })
                                }
                            </ul>
                        </span>
                    </div>
                    <div>
                        <span className='foot-left'>Items</span>
                        <span className='foot-right'>Completed</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;
