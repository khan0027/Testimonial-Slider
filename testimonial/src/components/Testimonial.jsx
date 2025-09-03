import React, { useState } from 'react'
import Card from './Card';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Testimonial = (props) => {

  const reviews = props.reviews;

  const [trackId,setTrackId] = useState(1)
;  const [track,setTrack] = useState(reviews[0]);

  function increaseHandler(){
    setTrackId(trackId => (trackId+1)%5);
    setTrack(track => reviews[trackId]);
  }
  function decreaseHandler(){
    setTrackId(trackId => (trackId-1)%5);
    setTrack(track => reviews[trackId]);
  }
  function surprisehandler(){

  }

  return (
    <div className='bg-gray-300 flex flex-col justify-center items-center z-100 rounded-md' >
        <Card review={track} />
        <div className='mt-5 w-45 h-13' >
          <button className='mr-2' onClick={decreaseHandler} ><FaAngleLeft  size={20} /></button>
          <button className='ml-2'onClick={increaseHandler} ><FaAngleRight size={20} /></button>
        </div>
        <div className='w-45 h-13 mb-2 ' ><button onClick={surprisehandler} className='bg-purple-900 w-40 h-10 text-white p-2 rounded-md hover:w-41 hover:h-11  duration-300 ' >Surprise Me</button></div>
    </div>
  )
}

export default Testimonial