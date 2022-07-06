import React from "react";


const Result = ({value}) => {
    // debugger
    console.log('render Result', value);
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

export default Result;