import React from "react";
class Actived extends React.Component {
    handleChange(index) {
        const list = this.props.actived.list
        list.splice(index, 1)
        this.setState({
            lists: list
        })


    }
    render() {
        return (
            <div>
                {this.props.actived.list.map((item, index) => {
                    return <div key={index} onClick={this.handleChange.bind(this, index)}>{item}</div>
                })}
            </div>
        )
    }
}
export default Actived