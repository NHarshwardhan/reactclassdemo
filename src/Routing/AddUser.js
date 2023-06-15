import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate()

  const inputRef = useRef()
  
  useEffect(()=>{
      //  inputRef.current.focus()
      console.log(inputRef)
      inputRef.current = registerFormData.name

  },[registerFormData.name])

  const registerProcess = () => {

     axios.post("http://localhost:5000/students", registerFormData, {
        headers: { "Content-Type": "application/json" },
        })
     .then(response=>{
            console.log(response)
            alert('Data addedd Successfully')
            navigate('/users')
     })
     .catch(error=>{
            console.log(error)
     })

  };


  return (
    <div className="container">
      <h3>Add New Record</h3>
      <div className="row">
        <div className="input-field col s12">
          <input
            ref={inputRef}
            id="name"
            type="text"
            className="validate"
           
            onChange={(event) =>
              setRegisterFormData({
                ...registerFormData,
                name: event.target.value,
              })
            }
          />

          <label htmlFor="name">Name</label>
         
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="email"
            className="validate"
            onChange={(event) =>
              setRegisterFormData({
                ...registerFormData,
                email: event.target.value,
              })
            }
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            onClick={registerProcess}
            className="waves-effect waves-light btn purple darken-4"
          >
            Register
          </button>
        </div>
      </div>
      <p>Current value : {registerFormData.name} </p>
          <p>Previous value: {inputRef.current}</p>
    </div>
    
  );
}
