export default function Greet() {
  
  const username = 'admin'
  const password = 'admin'

  const printMessage = ()=>{
      alert('Inside PrintMessage()')
  } 
  const printData = (msg)=>{
    alert(msg)
  } 
  const person= ['Peter',23, 5000]

  const apidata = [
     {id:101, name:'Peter', salary:4000},
     {id:102, name:'John', salary:6000},
     {id:103, name:'Mike', salary:8000},
     {id:104, name:'Rick', salary:2000},
  ]
  const isLoading = false

  const isDisabled = false

  return (
    <div>
         <h2 className="">Greet Component</h2>
         <p>Username = {username}</p>
         <p>password = {password}</p>
         {/* Calling a function without parameter */}
         <button onClick={printMessage} className="waves-effect waves-light btn purple darken-4">Login</button>
          &nbsp;
          {/* Calling a function with parameter */}
          <button onClick={()=>printData('Register Form')} className="waves-effect waves-light btn orange darken-4">Register</button>
          &nbsp;
          <button disabled={isDisabled} onClick={()=>printData('Register Form')} className="waves-effect waves-light btn blue darken-4">Sign up</button>

          <ul>
              <li>{person}</li>
          </ul> 
          
          <table className="table">
              <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                  </tr>
              </thead>
              <tbody>
                    {
                      isLoading?apidata.map(user=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.salary}</td>
                         </tr>
                      ))
                      : 
                            <div className="preloader-wrapper active">
                              <div className="spinner-layer spinner-red-only">
                                <div className="circle-clipper left">
                                  <div className="circle"></div>
                                </div><div className="gap-patch">
                                  <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                  <div className="circle"></div>
                                </div>
                              </div>
                            </div>
                    }
              </tbody>
              
          </table>
          
          
    </div>
  )
}
