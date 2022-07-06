import React from "react";
import PropTypes from "prop-types";


const Result = ({value}) => {
    // debugger
    console.log('render Result', value);
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "10"
}

export default Result;