import React, { useState, useEffect } from 'react';
import RadioButton from '../RadioButton/RadioButton'
import Question from '../Question/Question'
import Button from '../Button/Button'
import questionObject from '../../mockData/questionData'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questionInput, setQuestionInput] = useState(questionObject[currentQuestion].questionInput)
  const [inputOptions, setInputOptions] = useState(questionObject[currentQuestion].inputOptions)
  const nextLabel = 'Next'
  const submitLabel = 'Submit'
  const nextQuestion = () => {
    if (currentQuestion < questionObject.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
    else{
      //TODO
      //finish test logic
    }
  }
  useEffect(() => {
    setInputOptions(questionObject[currentQuestion].inputOptions)
    setQuestionInput(questionObject[currentQuestion].questionInput)
  })
  return (
    <div>
      <Question questionInput={questionInput} />
      <RadioButton inputOptions={inputOptions} />
      <Button label={currentQuestion < questionObject.length - 1 ? nextLabel : submitLabel} onClick={nextQuestion} />
    </div>
  );
}

export default App;
