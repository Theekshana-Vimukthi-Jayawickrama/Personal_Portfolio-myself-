import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 id="about"'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2>
                        <h2 className='text-4xl font-bold mb-4 primary-color'> About me</h2>
                        <p className=''>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi deserunt illo enim velit. Quidem ab vitae provident, facilis totam magni voluptatum omnis unde quod minima, temporibus eaque voluptatibus illum aliquid.
                        </p>
                    </h2>

                </div>

            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={about} width={300} height={300} />

        </div>

    </div>
  )
}

export default About