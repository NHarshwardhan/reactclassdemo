import React, { useState } from 'react'
import questions from './Questions'

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore , setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerClick = (option)=>{
     
     if(option){
          setScore(prevScore => prevScore + 1)
     }
     const nextQuestion = currentQuestion + 1

     if(nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion)
     }
     else{
          setShowScore(true)
     }

  }
  return (
    <div className='container'>
         <div className='row'>
             <div className='col m12'>
                  {
                     showScore ?
                       <h3>You scored {score} out of {questions.length} </h3>
                     :
                     <div>
                         <h3>Question: {currentQuestion +1} / {questions.length} </h3>
                         <h4>{questions[currentQuestion].questionText}</h4>
                         <br/>
                         {
                            questions[currentQuestion].answerOptions.map(option=>(
                                 <>
                                 <button onClick={()=>handleAnswerClick(option.isCorrect)}
                                      className='waves-effect waves-light btn purple darken-4'>
                                     {option.answerText}
                                </button>
                                &nbsp;&nbsp;
                                 </>
                               
                            ))
                            
                         }
                     </div>
                  }

             </div>
         </div>
    </div>
  )
}
