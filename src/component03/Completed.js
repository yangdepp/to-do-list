import React from "react";
class Competed extends React.Component {
    handleChange(index) {
        const list = this.props.completed.list
        list.splice(index, 1)
        this.setState({
            lists: list,
        })
    }
    render() {
        return (
            <div>
                {this.props.completed.list.map((item, index) => {
                    return <div key={index} onClick={this.handleChange.bind(this, index)}>{item}</div>
                })}
            </div>
        )
    }
}
export default Competed