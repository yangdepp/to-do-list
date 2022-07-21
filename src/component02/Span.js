import React from "react";



class Span extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                'All',
                'Actived',
                'Competed'
            ],
            item: [0]
        }
    }
    handleValue(index) {
        this.props.spans(this.state)
        let value = this.state.item
        value = index
        this.setState({
            item: value
        })
      
    }
    render() {
        const s = this.state.item
        return (
            <div className="spans">
                {this.state.list.map((items, index) => {
                    return <span className={s === index ? 'menu' : ''} key={index}  onClick={this.handleValue.bind(this, index)}>
                        {items}
                    </span>
                })}
             
            </div>

        )
    }
}
export default Span