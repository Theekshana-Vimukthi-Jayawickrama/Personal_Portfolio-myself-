import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>

<h1 className='text-3xl font-bold primary-color ml-4'>Theekshana</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><Link to={``} >Home</Link></li>
            <li className='p-5'><Link to={``} >About</Link></li>
            <li className='p-5'><Link to={``} >Services</Link></li>
        </ul>
        
        <div onClick={handleNav} className='block md:hidden mr-7'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className= {nav ? 'bg-[#202121] fixed h-full left-0 top-0 w-[60%]  ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl primary-color m-4'>Theekshana</h1>
            <ul className='p-8 text-2x1'>
                <li className='p-2'><Link to={``} >Home</Link></li>
                <li className='p-2'><Link to={``} >About</Link></li>
                <li className='p-2'><Link to={``} >Services</Link></li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar