import React from 'react'
import { myBasket } from './App'

const quizData = [
  {
  title: "What is 10+ 30?",
  A: 100,
  B: 50,
  C: 40,
  D: 60,
  Answer: "C"
  },
  {
  title: "What is the use of useState() in React?", 
  A: "To store the data",
  B: "To create the data in a random manner",
  C: "Both A and B",
  D: "None of the Above",
  Answer: "A"
  },
  {
  title: "What does + stands for?",
  A: "Addition",
  B: "Subtraction",
  C: "Multiplication",
  D: "Division",
  Answer: "A"
  },
  {
    title: "What is the use of useState() in React?", 
    A: "To store the data",
    B: "To create the data in a random manner",
    C: "Both A and B",
    D: "None of the Above",
    Answer: "A"
  }
]

function Question() {

  const {mySetPage,myScore,mySetScore} = React.useContext(myBasket)
  
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  // currentQuestion = 1

  const [optionChoosen,setOptionChoosen] = React.useState("")

  
  // score=0
  
  function nextButton(){
    //Logic to verify the Answer
    if(optionChoosen === quizData[currentQuestion].Answer){
      // If the above condition is true, it means the answer is correct. Increase the score by +1
      mySetScore(myScore + 1)
    }
    //Logic to increase the value present in current question variable by +1
    setCurrentQuestion(currentQuestion + 1)
  }
  
  function submitButton(){
    //Logic to verify the answer for the last question
    if(optionChoosen === quizData[currentQuestion].Answer){
      // If the above condition is true, it means the answer is correct. Increase the score by +1
      mySetScore(myScore + 1)
    }
    // Logic to call the result component
    mySetPage("result")
  }
  
  return (
    <div style={ {margin: 50}}>
    
      <h2>Q: { quizData [currentQuestion].title}</h2>
      A: <button className='btn btn-outline-dark' onClick={function(){
        setOptionChoosen("A")
      }}>{ quizData[currentQuestion].A }</button><br/><br/>
      B: <button className='btn btn-outline-dark' onClick={function(){
        setOptionChoosen("B")
      }}>{ quizData [currentQuestion].B}</button><br/><br/>
      C: <button className='btn btn-outline-dark' onClick={function(){
        setOptionChoosen("C")
      }}>{ quizData [currentQuestion].C}</button><br/><br/>
      D: <button className='btn btn-outline-dark' onClick={function(){
        setOptionChoosen("D")
      }}>{ quizData[currentQuestion].D}</button><br/><br/>

      {
        currentQuestion == quizData.length - 1 ? <button className='btn btn-danger' onClick={submitButton}>Submit</button> : <button className='btn btn-primary' onClick={nextButton}>Next</button>
      }
      
      
    </div>
  )
}

export default Question