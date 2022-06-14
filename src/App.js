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
    spanChangeOne() {
        this.setState({
            list: [...this.state.list, '123']
        })
    }
    spanChangeTwo() {
        this.setState({
            list: [...this.state.list, '456']
        })
    }
    spanChangeThree() {
        this.setState({
            list: [...this.state.list, '789']
        })
    }
    handleBtnChange() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="App">
                    <div className='headerContent'>
                        <span value={this.state.spanValue} className='bto1' onClick={this.spanChangeOne.bind(this)}>all</span>
                        <span value={this.state.spanValue} className='bto1' onClick={this.spanChangeTwo.bind(this)}>actived</span>
                        <span value={this.state.spanValue} className='bto1' onClick={this.spanChangeThree.bind(this)}>completed</span>

                        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /><button onClick={this.handleBtnChange.bind(this)}>add</button>
                    </div>
                    <div className='header-foot'>
                        <ul>
                            {this.state.list.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className='bodyContent'></div>
                    <span className='left'>items left</span>
                    <span className='right'>Clear completed</span>
                </div>
            </div>
        );
    }
}

export default App;
