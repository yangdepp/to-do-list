import React from "react";
class Bottom extends React.Component{

    render(){
        return (
            <div>
                <span className='a'>{this.props.value.length}items left</span>
                <span className='b'>{this.props.value.length}Clear Completed</span>
            </div>
        )
    }
}
export default Bottom