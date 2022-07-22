import React from "react";
class Input extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
    }
    handleChangeInput(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }
    changeKey(e) {
        if (e.keyCode === 13) {
            this.props.inputs(e.target.value)
            this.setState({
                inputValue: ''
            })
        }
    }
    render() {
        return (
            <div>
                <input
                    onKeyDown={this.changeKey.bind(this)}
                    onChange={this.handleChangeInput.bind(this)}
                    value={this.state.inputValue}
                    placeholder='接下来要做什么' />
            </div>
        )
    }
}
export default Input