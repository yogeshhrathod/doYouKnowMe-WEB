import React from "react";

function Options(props) {
  const { option, ids, onOptionChange, questionId } = props;
  return (
    <>
      <input
        type="radio"
        name={`que${questionId}`}
        id={ids}
        value={option}
        onClick={() => onOptionChange(option)}
      />
      <label htmlFor={ids}>{option}</label>
    </>
  );
}

export default Options;
