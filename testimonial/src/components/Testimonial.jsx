import React, { useState } from 'react'
import Card from './Card';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Testimonial = (props) => {

  const reviews = props.reviews;

  const [index,setIndex] = useState(0);

  function increaseHandler(){
    if((index + 1) >= reviews.length){
      setIndex(0);
    }
    else
    {
      setIndex(index+1);
    }
  }
  function decreaseHandler(){
    if((index - 1) < 0){
      setIndex(reviews.length - 1);
    }
    else
    {
      setIndex(index-1);
    }
  }
  function surprisehandler(){
      const rand = Math.floor(Math.random()*reviews.length);
      setIndex(rand);
  }

  return (
    <div className='bg-white rounded-md shadow-md flex flex-col justify-center items-center' >
        <Card review={reviews[index]} />
        <div className='mb-4 w-45' >
          <button className='mr-2' onClick={decreaseHandler} ><FaAngleLeft  size={20} /></button>
          <button className='ml-2'onClick={increaseHandler} ><FaAngleRight size={20} /></button>
        </div>
        <div className='w-45 h-13 mb-5 ' ><button onClick={surprisehandler} className='bg-purple-900 w-40 h-10 text-white p-2 rounded-md hover:w-41 hover:h-11  duration-300 ' >Surprise Me</button></div>
    </div>
  )
}

export default Testimonial