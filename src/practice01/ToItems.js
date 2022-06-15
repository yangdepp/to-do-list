import React from "react";
class ToItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }
    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </div>
        )
    }
}
export default ToItems;