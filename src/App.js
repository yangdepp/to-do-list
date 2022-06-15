import React from 'react';
import AppLi from './AppLi';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputValue: ''
        }
        this.spanChangeOne=this.spanChangeOne.bind(this)
        this.spanChangeTwo=this.spanChangeOne.bind(this)
        this.spanChangeThree=this.spanChangeOne.bind(this)
        this.changeDelete=this.changeDelete.bind(this)
        this.inputChange=this.inputChange.bind(this)
        this.handleBtnChange=this.handleBtnChange.bind(this)

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
    changeDelete(index){
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }
    showApp(){
        return (
            this.state.list.map((item, index) => {
                return <AppLi delete={this.changeDelete} index={index} content={item} key={index}/>
                // return <li key={index} onClick={this.changeLi.bind(this,index)}>{item}</li>
            })
        )
    }
    render() {
        return (
            <div>
                <div className="App">
                    <div className='headerContent'>
                        <span value={this.state.spanValue} className='bto1' onClick={this.spanChangeOne}>all</span>
                        <span value={this.state.spanValue} className='bto1' onClick={this.spanChangeTwo.bind(this)}>actived</span>
                        <span value={this.state.spanValue} className='bto1' onClick={this.spanChangeThree.bind(this)}>completed</span>
                        <input value={this.state.inputValue} onChange={this.inputChange} /><button onClick={this.handleBtnChange}>add</button>
                    </div>
                    <div className='header-foot'>
                        <ul>
                            {this.showApp()}
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
