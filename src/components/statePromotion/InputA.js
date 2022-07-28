import React from "react";
class InputA extends React.Component {
    constructor(props) {
        super(props)
    }
    onChange = (e) => {
       this.props.InputA(e.target.value)
    }
    render() {
        const  inputValue  = this.props.inputValue
        return (
            <div>
                <p>A</p><input value={inputValue} onChange={this.onChange} /><br />
            </div>
        )
    }
}
export default InputA