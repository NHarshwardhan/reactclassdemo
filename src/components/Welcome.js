import React from 'react'

export default function Welcome(props) {

  // Destructure Object
  let {name,age,isAdmin} = props

  return (
    <div>
        <h4>Welcome {name},
                   {age},
                    {isAdmin?'Admin':'Guest'}
                    </h4>
    </div>
  )
}

