import React from "react";
class Tab extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:['All','Actived','Completed']
        }
    }
    handleChange(){
      this.setState({
           background:'green'
      })
    }
    render(){
        return(
            <div>
                {this.props.children}
                {this.state.items.map((item,index)=>{
                    return <span  onClick={this.handleChange.bind(this)} className="Tablist" key={index}>{item}</span>
                })}
            </div>
        )
    }
}
export default Tab