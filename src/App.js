import React from 'react';
import './styles.scss'
import RadioButton from './components/RadioButton/RadioButton'
import Question from './components/Question/Question'
import Button from './components/Button/Button'
function App() {
  const inputOptions = [`Learn Test driven development.`, 'Sports', 'Songs']
  const questionInput = `Learn language syntax, data structures, it's paradigms, design patterns, Scopes and closures
  ES6
  MVC, MVVM`
  const label = 'Next'
  const nextQuestion = () => {
    console.log('nextClicked');

  }
  return (
    <div>
      <Question questionInput={questionInput} />
      <RadioButton inputOptions={inputOptions} />
      <Button label={label} onClick={nextQuestion} />
    </div>
  );
}

export default App;
