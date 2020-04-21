import React from 'react';
import './styles.scss'
import RadioButton from './components/RadioButton/RadioButton'
import Question from './components/Question/Question'
function App() {
  const inputOptions = [`Learn Test driven development.`,'Sports','Songs']
  const questionInput = `Learn language syntax, data structures, it's paradigms, design patterns, Scopes and closures
  ES6
  MVC, MVVM`
  return (
    <div>
      <Question questionInput={questionInput}/>
      <RadioButton inputOptions={inputOptions}/>
    </div>
  );
}

export default App;
