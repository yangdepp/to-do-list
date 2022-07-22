import React from "react";
class Span extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['all',
                'Actived',
                'Completed'
            ],
            indexs: []
        }
    }
    handleChangeIndex(index) {
        this.props.spans(this.state.indexs)
        let value = this.state.indexs
        value = index
        console.log(value);
        this.setState({
            indexs: value
        })
    }
    render() {
        const s=this.state.indexs
        return (
            <div className="two">
                {this.state.list.map((item, index) => {
                    return <span 
                    className={s === index ? 'menu' : ''}
                        onClick={this.handleChangeIndex.bind(this, index)}
                        key={index}>{item}
                    </span>
                })}
            </div>
        )
    }
}
export default Span