import React from "react";
function TabList(props) {
    return (
        <div>
            {React.Children.map(props.children,
                (child, index) => {
                    return React.cloneElement(child, {
                        index
                    })
                })}
        </div>
    )
}
export default TabList