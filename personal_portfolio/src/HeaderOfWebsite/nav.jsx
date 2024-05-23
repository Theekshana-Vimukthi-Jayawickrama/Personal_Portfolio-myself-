import React from 'react'
import { Link } from 'react-router-dom';


const nav = () => {
  return (
    <>
    
        <ul>
            <li><Link to={``} >Home</Link></li>
            <li><Link to={``} >About</Link></li>
            <li><Link to={``} >Services</Link></li>
            <li><Link to={``} >Skils</Link></li>
            <li><Link to={``} >Portfolio</Link></li>
            <li><Link to={``} >Contact</Link></li>
        </ul>
    </>
  )
}

export default nav