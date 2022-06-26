import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    handleChangeInput(e) {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }


    changeKey(e) {
        if (e.keyCode === 13) {
            this.props.inputs(e.currentTarget.value)
        }
        this.setState({
            inputValue: ''
        })
    }


    render() {
        return (
            <div>
                <input
                    onKeyDown={this.changeKey.bind(this)}
                    onChange={this.handleChangeInput.bind(this)}
                    value={this.state.inputValue}
                    placeholder='123' />
            </div>
        )
    }
}

export default Input;
