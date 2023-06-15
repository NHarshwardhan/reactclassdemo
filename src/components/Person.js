import React, { useState } from 'react'

export default function Person() {

  const [message, setMessage] = useState('Please susbcribe' )
  const [counter, setCounter] = useState(0)  

  
  const subscribe = ()=>{
    setMessage('Thank you for subscribing..')
  }
  const increment = ()=>{
    setCounter(prevCounter=>prevCounter +1)
       
  }
  return (
    <div>
        <h3>{message}</h3>
        <button onClick={subscribe} 
               className="waves-effect waves-light btn purple darken-4">
               Subscribe
        </button>
        <h3>Counter :{counter}</h3>
        <button onClick={increment} 
               className="waves-effect waves-light btn orange darken-4">
               Increment
        </button>
        <h3>Task Done: Yes / No</h3>
        <button onClick={increment} 
               className="waves-effect waves-light btn blue darken-4">
               press Here
        </button>

    </div>
  )
}
