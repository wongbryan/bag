import React from "react";

const Row = props => {
  const classNames = ["row"];

  if (props.background) {
    classNames.push(props.background);
  }
  if (props.fixed) {
    classNames.push("fixed");
  }
  if (props.large) {
    classNames.push("large");
  }

  return (
    <div className={classNames.join(" ")}>
      <div className="left">{props.children}</div>
      <div className="right">{props.right}</div>
    </div>
  );
};

export default Row;
