import React from "react";

type ResultProps = {
  value: string;
};

const Result: React.FC<ResultProps> = ({ value }) => (
  <div className="result">
    <span>{value}</span>
  </div>
);

Result.defaultProps = {
  value: "0",
};

export default Result;
