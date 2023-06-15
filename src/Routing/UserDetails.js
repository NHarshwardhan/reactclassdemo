import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function UserDetails() {
   const [user , setUser] = useState()
   const result =   useLocation()
   const {id} = result.state 
   
   useEffect(()=>{
       axios.get('http://localhost:3004/users/'+id)
            .then(response=>{
                setUser(response.data)
            })
            .catch(error=>{
                console.log(error)
            })

   },[])
   

  return (
    <div className='container'>
         <br/><br/>        
         <div className='row'>
            <div className='col m12'>

            {
                !user?
                <div class="progress">
                         <div class="indeterminate"></div>
                </div>
                 :
                <ul class="collection with-header">
                        <li class="collection-header"><h4>{user?.name}</h4></li>
                        <li class="collection-item">{user?.username}</li>
                        <li class="collection-item">{user?.email}</li>
                        <li class="collection-item">{user?.address.city}</li>
                        <li class="collection-item">{user?.address.zipcode}</li>
                </ul> 
            }
            
            </div>
         </div>
    </div>
  )
}
