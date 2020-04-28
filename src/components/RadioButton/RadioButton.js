import React from "react";

import Options from "../Options/Options";
function AllRadioButtons(inputOptions) {
  const { inputArray, onOptionChange, questionId } = inputOptions;

  let options = [];
  for (let index = 0; index < inputArray.length; index++) {
    options.push(
      <Options
        option={inputArray[index]}
        key={`rb${index}`}
        ids={`rb${index}`}
        onOptionChange={onOptionChange}
        questionId={questionId}
      />
    );
  }

  return <>{options}</>;
}
function RadioButton(props) {
  const { inputOptions, onOptionChange, questionId } = props;
  return (
    <div className="group">
      <AllRadioButtons
        inputArray={inputOptions}
        onOptionChange={onOptionChange}
        questionId={questionId}
      />
    </div>
  );
}

export default RadioButton;
