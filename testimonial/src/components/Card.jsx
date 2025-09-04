import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Card = (props) => {

  const review = props.review;

  return (
    <div className='flex flex-col justify-center w-[500px] h-[60vh] relative items-center m-5 ' >
        <div className='rounded-full bg-violet-500 absolute top-[-50px] left-[20px]  ' ><img src={review.image} alt="" className='h-30 relative top-1 right-2 rounded-full w-30' /></div>
        <div className='text-2xl font-bold mt-5  ' >
            <h1 className='capitalize' >{review.name}</h1>
        </div>
        <div className='text-gray-400 text-sm mt-1 ' >
            <h4 className='uppercase' >{review.job}</h4>
        </div>
        <div className=' flex flex-col justify-center items-center mt-15' >
          <FaQuoteLeft color='purple  ' size={20} />
          <p className='mt-4 mb-4 p-5 ' >
            {review.text}
          </p>
          <FaQuoteRight color='purple' size={20} />
        </div>
        
        
    </div>

  )
}

export default Card