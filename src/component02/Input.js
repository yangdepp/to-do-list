import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.changeKey=this.changeKey.bind(this)
    }
    handleChangeInput(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    changeKey(e) {
        //当按下回车时通过props通知父组件更新
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
                <input className='input'
                    onKeyDown={this.changeKey}
                    onChange={this.handleChangeInput}
                    value={this.state.inputValue}
                    placeholder='123' />
            </div>
        )
    }
}
export default Input;
