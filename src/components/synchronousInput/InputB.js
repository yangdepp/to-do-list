import React from "react";
class InputB extends React.Component {
    constructor(props) {
        super(props)
        
    }
   
    render() {
       const {inputValue}=this.props
        return (
            <div>
                <p>B</p><input value={inputValue} />
            </div>
        )
    }
}
export default InputB