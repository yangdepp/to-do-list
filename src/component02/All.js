import React from "react";
class All extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:[
                '1',
                '2',
                '3'
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
export default All