import React from "react"
import Actived from "./Actived"
import All from "./All"
import Completed from "./Completed"

class Content extends React.Component {
    render() {
        // const list=this.props.num
        // console.log(list);
        let lists = this.props.value.item
        console.log(lists);
        if (lists === 0) {
            return <All />
        } else if (lists === 1) {
            return <Actived />
        } else {
            return <Completed />
        }
    }
}
export default Content