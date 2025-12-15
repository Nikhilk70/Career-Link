import React from 'react'
import steve from "../../assets/cmpy_logos/SteveJobs.jpeg";
import aristotel from "../../assets/cmpy_logos/aristoteles.jpeg";
import PeterDrucker from "../../assets/cmpy_logos/PeterDrucker.jpeg";
import PabloPicasso from "../../assets/cmpy_logos/PabloPicasso.jpeg";
import python from "../../assets/courses/pythonImg.jpg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function QuotesCard({ quote, name, image, fade }) {
  return (
    <div
      className={`quotesSection flex gap-[50px] justify-center items-center 
      transition-opacity duration-700 ease-in-out
      ${fade ? "opacity-100" : "opacity-0"}`}
    >
      <div className='quotesText h-full flex flex-col justify-center items-center'>
        <h2 className='font-bold text-[15px]'>"{quote}"</h2>
        <p className='w-full text-right mr-5'>- {name}</p>
      </div>
      <img src={image} alt="" className='w-[150px] rounded-xl' />
    </div>
  )
}

function Certifications() {
  return (
    <div className='certCard bg-white w-[320px] px-3 py-2 h-[385px] rounded-[5px] hover:w-[330px] flex flex-col gap-2'>
      <div className='cet-image w-full flex justify-center items-center'>
        <img src={python} alt="" className='w-[300px] rounded-[6px] hover:w-[310px]'/>
      </div>
      <div className='cert-heading'>
        <h2 className='font-bold'>Python Programming Language</h2>
      </div>
      <div>
        <h4 className='font-bold text-[14px]'>Skills</h4>
        <p className='text-[13px] font-normal'>Programming Principles, Data Structures, 
          Data Import/Export, Object Oriented Programming (OOP), 
          Python Programming, Application Programming Interface (API) ...</p>
      </div>
      <div className='flex gap-3 items-center'>
        <span className='text-[14px] font-bold'><FontAwesomeIcon icon={faStar} />4.6K</span><p className='text-[11px] font-medium'> 20K reviews</p>
      </div>
      <div>
        <p className='text-[17px] font-light'>Beginner 1-2 Months</p>
      </div>
    </div>
  )
}


function Review() {

  const quotes = [
    {
      qoute : "Your time is limite, so don't waste is living someone else's life.",
      name : "Steve Jobs",
      image : steve
    },
    {
      qoute : "Where the needs of the world and your talents cross, there lies your vocation.",
      name : "Aristotle",
      image : aristotel
    },
    {
      qoute : "The best way to predict the future is to create it.",
      name : "Peter Drucker",
      image : PeterDrucker
    },
    {
      qoute : "Action is the foundational key to all success.",
      name : "Pablo Picasso",
      image : PabloPicasso
    },
  ]

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 700);
    }, 4000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className='review-container'>
      <div>
        <QuotesCard quote={quotes[index].qoute} name={quotes[index].name} image={quotes[index].image} fade={fade}/>
      </div>
      <div>
        <h1>Career-Link Certifications</h1>
        <Certifications />
      </div>
        <h1>This is Review section</h1>
    </div>
  )
}

export default Review