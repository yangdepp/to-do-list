import React from "react";
class Actived extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                '4',
                '5',
                '6'
            ]
        }
    }
    render(){
       return (
           <div>
            {this.state.list.map((item,index)=>{
                return <div key={index}>{item}</div>
            })}
           </div>
       )
    }
}
export default Actived