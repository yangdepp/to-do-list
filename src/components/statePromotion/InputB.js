import React from "react";
class InputB extends React.Component {
    constructor(props) {
        super(props)
        
    }
    onChange = (e) => {
        this.props.InputB(e.target.value)
    }
    render() {
        const  inputValue  = this.props.inputValue
        return (
            <div>
                <p>B</p><input value={inputValue} onChange={this.onChange} />
            </div>
        )
    }
}
export default InputB