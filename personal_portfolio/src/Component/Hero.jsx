import React from 'react'
import heroiamge from '../assets/profile.jpg'
import {TypeAnimation} from "react-type-animation";
import NavBar from './Navbar'

const Hero = () => {
  return (

    <>  
        <NavBar/>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70h] mx-auto py-8 bg-black'>
            
            <div className='my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px] '>
                    <img src={heroiamge} alt='hero image' className='rounded-full'/>
            </div>
            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-8xl font-extrabold'>
                    <span className='primary-color'>
                        I'm a
                    </span><br />
                    <TypeAnimation
                    sequence={
                        [
                            "Frontend Dev",
                            1000,
                            "Backend Dev",
                            1000,
                            "Web dev",
                            1000
                        ]
                    }
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>  

                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is Theekshana and I am a student in sabaragamuwa university of sri lanka.
                </p>          

                <div className='my-8 '>
                    <a href = "/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                        Download CV
                    </a>
                    <a href = "/" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact
                    </a>

                </div>    
            </div>

        </div>
    </>
         

      
  )
}

export default Hero