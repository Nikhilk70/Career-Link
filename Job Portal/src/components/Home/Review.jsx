import React from 'react'
import steve from "../../assets/cmpy_logos/SteveJobs.jpeg";

function Review() {
  return (
    <div className='review-container'>
      <div className='quotesSection flex gap-[50px] justify-center items-center '>
        <div className='quotesText h-full flex flex-col justify-center items-center'>
          <h2 className='font-bold text-[20px]'>"Your time is limite, so don't waste is living someone else's life."</h2>
          <p className='w-full text-right mr-5'>- Steve Jobs</p>
        </div>
        <img src={steve} alt="" />
      </div>
      <h1>This is Review section</h1>
    </div>
  )
}

export default Review