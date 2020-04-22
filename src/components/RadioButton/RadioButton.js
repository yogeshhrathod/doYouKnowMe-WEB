import React, { useState,useEffect } from 'react';

import Options from '../Options/Options'
function AllRadioButtons(inputOptions) {
  const { inputArray, onOptionChange } = inputOptions

  let options = []
  for (let index = 0; index < inputArray.length; index++) {
    options.push(<Options option={inputArray[index]} key={`rb${index}`} ids={`rb${index}`} onOptionChange={onOptionChange}/>)
  }

  return (
    <>
      {options}
    </>
  );
}
function RadioButton(props) {
  const { inputOptions,onOptionChange } = props
  return (
    <div className="group">
      <AllRadioButtons inputArray={inputOptions} onOptionChange={onOptionChange} />
    </div>
  );
}

export default RadioButton
