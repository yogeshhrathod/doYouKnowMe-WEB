import React, { useState, useEffect } from 'react';
import './styles.scss'
import RadioButton from './components/RadioButton/RadioButton'
import Question from './components/Question/Question'
import Button from './components/Button/Button'
const questionObject = [
  {
    inputOptions: [`Learn Test driven development.`, 'Sports', 'Songs'],
    questionInput: `Learn language syntax, data structures, it's paradigms, design patterns, Scopes and closures ES6 MVC, MVVM`
  },
  {
    inputOptions: [`second Question`, 'work', 'done'],
    questionInput: `Scopes and closures ES6 MVC, MVVM`
  }
]
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
