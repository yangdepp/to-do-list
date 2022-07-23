import React from "react";
class Bottom extends React.Component {
    render() {
        return (
            <div>
                <span className='two'>items left{this.props.value.length}</span>
                <span className='one'>{this.props.value.length}Clear Completed</span>
            </div>
        )
    }
}
export default Bottom