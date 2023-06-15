import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function EditUser() {
   
  const [user, setUser] = useState()  

  const result = useLocation()
  const {id} = result.state
  
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:5000/students/'+id)
         .then(response=>{
             setUser(response.data)
         })
         .catch(error=>{
             console.log(error)
         })

    },[])
   
   const update = ()=>{
           
        axios.put("http://localhost:5000/students/"+id, user, {
                headers: { "Content-Type": "application/json" },
                })
            .then(response=>{
                    alert('Data updated Successfully')
                    navigate('/users')
            })
            .catch(error=>{
                    console.log(error)
            })
   }

   const deleteRecord =()=>{
        axios.put("http://localhost:5000/students/"+id )
            .then(response=>{
                    console.log(response)
                    alert('Data deleted Successfully')
                    navigate('/users')
            })
            .catch(error=>{
                    console.log(error)
            })
       }
   


  return (
   <div className="container">
      <h3>Update Record id :  {id}</h3>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            type="text"
            className="validate "
            defaultValue={user?.name} 
            onChange={(event)=> setUser({...user,name:event.target.value})}
          />

          <label className='active' htmlFor="name">Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="email"
            className="validate "
            defaultValue={user?.email} 
            onChange={(event)=> setUser({...user,email:event.target.value})}
          
          />
          <label className='active' htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button onClick={update}
          
            className="waves-effect waves-light btn red darken-4"
          >
            Update
          </button>
          &nbsp;&nbsp;
          <button onClick={deleteRecord}
          
          className="waves-effect waves-light btn red darken-4"
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  )
}
