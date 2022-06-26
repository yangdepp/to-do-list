import React from 'react';
class Todolist extends React.Component {
    render() {
        return (
            <div>
                {this.props.lists.map((item) => {
                    return <div>{item}</div>
                })}
            </div>
        )
    }
}
export default Todolist;
