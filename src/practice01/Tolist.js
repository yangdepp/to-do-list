import React from "react";
import ToItems from './ToItems'
class Tolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [

            ],
            inputValue: ''
        }
    }
    changeClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    changeInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    changeDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.changeInput.bind(this)} />
                    <button onClick={this.changeClick.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <ToItems
                                key={index}
                                index={index}
                                delete={this.changeDelete.bind(this)}
                                content={item}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Tolist;