import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ApiUser() {

  const [usersData , setUsersData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    //  Make An APi Call
         axios.get('http://localhost:5000/students')
                  .then(response=>{
                        console.log(response.data)
                        setUsersData(response.data)
                        setIsLoading(false)
                  })
                  .catch(error=>{
                      console.log(error)
                  })
  },[])  
  return (
    <div className='container'>
       <br></br>
         <div className='row'>
             <div className='col m12'>
                  <Link to='/users/create' className='waves-effect waves-light btn teal darken-4'> Add Record</Link>
             </div>
         </div>
         <div className='row'>
              <div className='col m12'>
                     <table className='table'>
                          <thead>
                              <tr>
                                 <th>Id</th>
                                 <th>Name</th>
                                 <th>Email</th>
                                 <th>Action(s)</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                 !isLoading?
                                        usersData.map(u=>(
                                            <tr key={u.id}>
                                                <td>
                                                    <Link to='/users/details' state={{id:u.id}} >{u.id}</Link>
                                                </td>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td>
                                                 <Link to='/users/edit' state={{id:u.id}} className='waves-effect waves-light btn orange'> Edit </Link>

                                                </td>
                                            </tr>
                                        ))
                                  :
                                  <tr>
                                     <td colSpan={3} className='center'>
                                     <div className="preloader-wrapper big active">
                                                <div className="spinner-layer spinner-blue-only">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div><div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div><div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                                </div>
                                            </div>
                                     </td>
                                  </tr>   

                              }
                          </tbody>
                     </table>
              </div>
         </div>
    </div>
  )
}
