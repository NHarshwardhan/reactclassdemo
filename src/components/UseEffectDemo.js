// import React, { useEffect, useState } from 'react'

// export default function UseEffectDemo() {
//   const [bio, setBio] = useState({}) 

//    useEffect(()=>{
//        const fetchData  = async()=>{
//             const response = await fetch('https://swapi.dev/api/people/1/')
//             const data = await response.json()
//             console.log(data)
//             setBio(data)
        
//        }   
//        fetchData()
//    },[]) 
    
//   return (
//     <div>
//        <pre>
//           {JSON.stringify(bio)}
//        </pre>
//     </div>
//   )
// }


// USE CASE 2
import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
  const [input, setInput]  = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(()=>{
      if(input.length < 5 || /\d/.test(input)){
          setIsValid(false)
      }
      else{
         setIsValid(true)
      }
  },[input])

  return (
    <div className='container'>
        <label htmlFor='input'>Write something (more than 5 non numerical character is valid)</label>
         <input type='text' id='input' onChange={(event)=> setInput(event.target.value)}/>

        <p>
           <span style={isValid?{backgroundColor:'lightgreen'}:{backgroundColor:'lightpink'}}>
               {isValid ? 'Valid':'Input not valid'}
           </span>
        </p> 
    </div>
  )
}
