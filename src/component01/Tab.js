import React, { useContext } from "react";
import TabStatusContext from "./context";

function Tab({ children, index}) {
    const tabStatusContext = useContext(TabStatusContext)
    const handleClick = () => {
       tabStatusContext.setIndex(index)
    }
    return (
        <div onClick={handleClick}>{children}</div>
    )
}
export default Tab