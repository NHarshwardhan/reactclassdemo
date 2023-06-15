import React, { useState } from 'react'

export default function Login() {
  const [loginFormData , setLoginFormData] = useState({username:'', password:''})

  const loginProcess = ()=>{
      console.log(loginFormData)
  }
  return (
    <div className='container'>
          <h2>Login Panel</h2>
         <div className="row">
            <div className="input-field col s12">
                <input id="email" type="email" className="validate"
                  
                  onChange={(event)=>setLoginFormData({...loginFormData, username:event.target.value})} />
                                             
                   
                <label htmlFor="email">Email</label>
            </div>
         </div>

        <div className="row">
            <div className="input-field col s12">
                <input id="password" type="password" className="validate"

                 onChange={(event)=>setLoginFormData({...loginFormData,password:event.target.value})} 
                                       
                />
                <label htmlFor="password">Password</label>
            </div>
        </div>

        <div className="row">
            <div className="input-field col s12">
                <button onClick={loginProcess} className="waves-effect waves-light btn purple darken-4">Login</button>

            </div>
        </div>
   
         {JSON.stringify(loginFormData)}
    </div>
     
  )
}


// username, password
//
/*
    ... => Spread Operator
     {...loginFormData,password:event.target.value}
     : create replica of loginFormData and only update the password

     {...loginFormData,username:event.target.value}
     : create replica of loginFormData and only update the username
*/