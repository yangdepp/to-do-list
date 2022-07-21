import React from "react"
import Actived from "./Actived"
import All from "./All"
import Completed from "./Completed"

class Content extends React.Component {
    render() {
        let value = this.props.value.item
        if (value === 0) {
            return <All />
        } else if (value === 1) {
            return <Actived />
        } else {
            return <Completed />
        }
    }
}
export default Content