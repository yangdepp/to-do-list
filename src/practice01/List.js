import React from "react";
import Items from './Items';
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [

            ],
            inputValue: ''
        }
    }
    handleChangeClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''

        })
    }
    handleIputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleChangeDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleIputChange.bind(this)} />
                    <button onClick={this.handleChangeClick.bind(this)}>add</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <Items
                            content={item}
                            index={index}
                            delete={this.handleChangeDelete.bind(this)}
                            key={index}
                        />
                    })}
                </ul>
            </div>
        )
    }
}
export default List