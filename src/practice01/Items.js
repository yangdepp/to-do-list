import React from "react";
class Items extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChangeDelete() {
        this.props.delete(this.props.index)
    }
    render() {
        return (
            <div onClick={this.handleChangeDelete.bind(this)}>
                {this.props.content}
            </div>
        )
    }
}
export default Items;