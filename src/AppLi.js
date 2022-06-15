import React from "react";
class AppLi extends React.Component{
    handleDelete(){
        this.props.delete(this.props.index)
    }
    render(){
        const {content}=this.props
        return(
            <div onClick={this.handleDelete.bind(this)}>
                {content}
            </div>
        )
    }
}
export default AppLi;