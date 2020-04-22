import React, { useState, useEffect } from "react";
import RadioButton from "../RadioButton/RadioButton";
import Question from "../Question/Question";
import Button from "../Button/Button";
import questionObject from "../../mockData/questionData";
import Alert from '../Alert/Alert'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionInput, setQuestionInput] = useState(
    questionObject[currentQuestion].questionInput
  );
  const [inputOptions, setInputOptions] = useState(
    questionObject[currentQuestion].inputOptions
  );
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [optionValue, setOptionValue] = useState("");
  const [isDisplay, setIsDisplay] = useState(false)
  const nextLabel = "Next";
  const submitLabel = "Submit";
  const nextQuestion = () => {
    if (!isButtonDisable) {
      if (currentQuestion < questionObject.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        //TODO
        //finish test logic
      }
    }
    else
    {
      showingAlert()
    }
    setIsButtonDisable(true);
  };
  const showingAlert =()=>{
    setIsDisplay(true)
    setTimeout(()=>{
      setIsDisplay(false)
    },3000)
  }
  const onOptionChange = (value) => {
    setOptionValue(value);
    console.log("value is " + value);
    setIsButtonDisable(value ? false : true);
  };

  useEffect(() => {
    setInputOptions(questionObject[currentQuestion].inputOptions);
    setQuestionInput(questionObject[currentQuestion].questionInput);
    setOptionValue("");
  });
  return (
    <>
      <Alert message={`Please select an option dude. 😰`} isDisplay={isDisplay}/>
      <div className='questionLayout'>
        <Question questionInput={questionInput} />
        <RadioButton
          inputOptions={inputOptions}
          onOptionChange={onOptionChange}
          questionId={currentQuestion}
        />
        <Button
          label={
            currentQuestion < questionObject.length - 1 ? nextLabel : submitLabel
          }
          onClick={nextQuestion}
          isButtonDisable={isButtonDisable}
        />
      </div>
    </>
  );
}

export default App;
