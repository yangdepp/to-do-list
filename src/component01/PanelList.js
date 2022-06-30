import React, { useContext } from "react";
import TabStatusContext from "./context";
function PanelList({ children }) {
    const tabStatusContext = useContext(TabStatusContext)
    return (
        <div>{children[tabStatusContext.index]}</div>
    )
}
export default PanelList