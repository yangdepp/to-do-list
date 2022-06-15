import React from "react";
class AppLi extends React.Component{
    handleDelete(){
        this.props.delete(this.props.index)
    }
    render(){
        const {content}=this.props
        return(
            <div onClick={this.handleDelete.bind(this)}>
                <input
                            value={this.state.inputValue}
                            onChange={this.inputChange} />
                        <button
                            onClick={this.handleBtnChange}>
                            add</button>
                {content}
            </div>
        )
    }
}
export default AppLi;