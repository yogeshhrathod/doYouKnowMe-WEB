import React from 'react';
import Options from '../Options/Options'
function AllRadioButtons(inputOptions) {
  const { inputArray } = inputOptions

  let options = []
  for (let index = 0; index < inputArray.length; index++) {
    options.push(<Options option={inputArray[index]} key={`rb${index}`} ids={`rb${index}`}/>)
  }

  console.log(options);

  return (
    <>
      {options}
    </>
  );
}
function RadioButton(props) {
  const { inputOptions } = props

  return (
    <div className="group">
      <AllRadioButtons inputArray={inputOptions} />
    </div>
  );
}

export default RadioButton
