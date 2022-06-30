import React, { useState } from "react";
import TabStatusContext from "./context";
function Tabs(props) {
    const [index, setIndex] = useState(0);
    return (
        <TabStatusContext.Provider value={{
            index,
            setIndex
        }}>
            <div>{props.children}</div>
        </TabStatusContext.Provider>
    )
}
export default Tabs