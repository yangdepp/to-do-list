import React from 'react';
class Todolist extends React.Component {
    handleChange(index) {
        const list = this.props.lists
        list.splice(index, 1)
        this.setState({
            lists: list,
        })
    }
    render() {
        return (
            <div>
                {this.props.lists.map((item, index) => {
                    return <div key={index} onClick={this.handleChange.bind(this, index)}>{item}</div>
                })}

            </div>

        )
    }
}
export default Todolist;
