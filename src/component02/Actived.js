import React from "react";
class Actived extends React.Component{
   
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