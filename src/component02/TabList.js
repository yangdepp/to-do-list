import React from "react";
class TabList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                 {this.props.children}
               {this.state.objs.map((item,index)=>{
                   return <li key={index}>{item}</li>
               })}
            </div>
        )
    }
}
export default TabList