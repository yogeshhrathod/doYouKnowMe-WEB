import React, { useState, useEffect } from 'react';
import RadioButton from '../RadioButton/RadioButton'
import Question from '../Question/Question'
import Button from '../Button/Button'
import questionObject from '../../mockData/questionData'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questionInput, setQuestionInput] = useState(questionObject[currentQuestion].questionInput)
  const [inputOptions, setInputOptions] = useState(questionObject[currentQuestion].inputOptions)
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [optionValue, setOptionValue] = useState('')
  const nextLabel = 'Next'
  const submitLabel = 'Submit'
  const nextQuestion = () => {
    if(!isButtonDisable){
      if (currentQuestion < questionObject.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      }
      else{
        //TODO
        //finish test logic
      }
    }
    setIsButtonDisable(true)
  }
  const onOptionChange=(value)=>{
    setOptionValue(value)
    console.log('value is '+value);
    setIsButtonDisable(value ? false : true) 
  }
  useEffect(() => {
    console.log(isButtonDisable);
    
    setInputOptions(questionObject[currentQuestion].inputOptions)
    setQuestionInput(questionObject[currentQuestion].questionInput)
    setOptionValue('')
  })
  return (
    <div>
      <Question questionInput={questionInput} />
      <RadioButton inputOptions={inputOptions} onOptionChange={onOptionChange}/>
      <Button label={currentQuestion < questionObject.length - 1 ? nextLabel : submitLabel} onClick={nextQuestion} isButtonDisable={isButtonDisable} />
    </div>
  );
}

export default App;
