import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav>
    <div className="nav-wrapper purple">
      <a href="#" className="brand-logo">KOENIG</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
        <li><Link to='/form'>React Form</Link></li>
        <li><Link to='/quiz'>Quiz</Link></li>
        <li><Link to='/login'>Login</Link></li>
       
      </ul>
    </div>
  </nav>
  )
}
