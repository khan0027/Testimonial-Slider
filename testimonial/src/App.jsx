import React from 'react'
import Testimonial from './components/Testimonial'
import reviews from './data.js'


const App = () => {
  return (
    <div className='flex flex-col h-[100vh] w-[100vw] justify-center items-center bg-gray-200 ' >
        
        <div className='text-center flex flex-col justify-center items-center' >

        <h1 className='text-3xl font-bold ml-2' >
          Our Testimonials
        </h1>
        <div className='h-0.5 border-2 w-30 mb-4 ml-2 border-violet-400 ' >
        </div>
        <Testimonial  reviews = {reviews} />
        </div>
    </div>
  )
}

export default App