import React from 'react'
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px32 w-full overflow-hidden 'id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-red-800'>About <span className='underline underline-offset-4 decoration-1 under font-light text-blue-950 '>Our Brand</span></h1>
        
        <p className='text-blue-950 max-w-80 text-center mb-8'>Properties Dedicated to your Vision</p>
        
        <div className='flex flex-col md:flex-row items center md:items-start md:gap-20 '>
          
          <img src="Ver.png" alt="Ver.png" className='w-full sm:w-1/2 max-w-lg'/>
          
          <div className='flex flex-col items-center md:items-start mt-10 text-blue-950'>
            
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
              
              <div>
                
                <p className='text-4xl font-medium text-red-700  mb-2'>10+</p>
                <p className='text-blue-950'>Years of Excellence</p>

                <p className='text-4xl font-medium text-red-700 mb-2'>12+</p>
                <p className='text-blue-950' >Projects Completed </p>

                <p className='text-4xl font-medium text-red-700 mb-2'>20+</p>
                <p className='text-blue-950' >Mn. Sq. Ft. Delivered </p>

                <p className='text-4xl font-medium text-red-700 mb-2'>25+</p>
                <p className='text-blue-950'>Ongoing Projects </p>

               
              </div>
            </div>
              <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, distinctio.</p>
              <button className='bg-blue-600 text-white px-8 py-2 rounded-full'>Learn More</button>
          </div>
        </div>
    </div>
  )
}

export default About