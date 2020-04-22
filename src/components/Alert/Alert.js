import React from "react";
function Alert(props) {
  const { message ,isDisplay} = props;  
  return <div className={`error ${isDisplay ? "displayAlert":""}`}>{message}</div>;
}
export default Alert;
