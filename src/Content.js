import React from "react"
import All from "./component02/All"
import Actived from "./component02/Actived"
import Completed from "./component02/Completed"
class Content extends React.Component{
    render(){
        if(this.props.all==0){
            return <All/>
       }else if(this.props.actived==1){
           return <Actived/>
       }else{
           return <Completed/>
       }
    }
}
export default Content