import React from "react";
import Completed from "./component02/Completed";
class Span extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                'All',
                'Actived',
                'Competed'
            ]
        }
    }
    handleValue(index) {
        const { handleChange } = this.props
        handleChange(index)
        this.setState({
            item: index
        })
    }

    render() {
        return (
            <div className="spans">
                {this.state.list.map((items, index) => {
                    return <span key={index} onClick={this.handleValue.bind(this, index)}>
                        {items}
                    </span>
                })}

            </div>

        )
    }
}
export default Span