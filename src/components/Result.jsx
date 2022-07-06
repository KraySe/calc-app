import React from "react";


const Result = (props) => {
    // debugger
    console.log('render Result', props);
    return (
        <div className="result">
            <span>{props.value}</span>
        </div>
    )
}

export default Result;