import React from "react";
class Completed extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:[
                '7',
                '8',
                '9'
            ]
        }
    }
    render() {
        return (
            <div>
               {this.state.list.map((item,index)=>{
                return <div key={index}>{item}</div>
            })}
            </div>
        )
    }
}
export default Completed