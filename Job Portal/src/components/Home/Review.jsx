import React from 'react'
import steve from "../../assets/cmpy_logos/SteveJobs.jpeg";
import aristotel from "../../assets/cmpy_logos/aristoteles.jpeg";
import PeterDrucker from "../../assets/cmpy_logos/PeterDrucker.jpeg";
import PabloPicasso from "../../assets/cmpy_logos/PabloPicasso.jpeg";
import python from "../../assets/courses/pythonImg.jpg";
import django from "../../assets/courses/django.png";
import dsa from "../../assets/courses/DSA.png";
import js from "../../assets/courses/js.png";
import mern from "../../assets/courses/mern.jpg";
import nodeJs from "../../assets/courses/nodeJs.png";
import react from "../../assets/courses/react.png";
import rest from "../../assets/courses/rest.jpg";
import database from "../../assets/courses/database.jpg";
import { useEffect, useState } from "react";
import CertificationCard from './Certifications';


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

  const certifications = [
    {
      image: python,
      title: "Python Programming Language",
      skills: "Programming Principles, Data Structures, OOP, APIs, File Handling...",
      rating: "4.6",
      reviews: "20K"
    },
    {
      image: js,
      title: "JavaScript for Web Development",
      skills: "ES6, DOM, Async JS, APIs, React Basics...",
      rating: "4.5",
      reviews: "18K"
    },
    {
      image: react,
      title: "React Frontend Development",
      skills: "Components, Hooks, Routing, State Management...",
      rating: "4.7",
      reviews: "25K"
    },
    {
      image: django,
      title: "Backend Development with Django",
      skills: "Models, Views, REST APIs, Authentication, ORM...",
      rating: "4.6",
      reviews: "22K"
    },
    {
      image: nodeJs,
      title: "Node.js & Express Backend",
      skills: "REST APIs, Middleware, MongoDB, Authentication...",
      rating: "4.5",
      reviews: "16K"
    },
    {
      image: mern,
      title: "Full Stack Web Development",
      skills: "HTML, CSS, JavaScript, React, Node.js, Databases...",
      rating: "4.8",
      reviews: "30K"
    },
    {
      image: dsa,
      title: "Data Structures & Algorithms",
      skills: "Arrays, Stacks, Queues, Trees, Graphs, Problem Solving...",
      rating: "4.7",
      reviews: "28K"
    },
    {
      image: rest,
      title: "REST API Development",
      skills: "API Design, Authentication, CRUD, Performance...",
      rating: "4.6",
      reviews: "19K"
    },
    {
      image: database,
      title: "Database Management Systems",
      skills: "SQL, PostgreSQL, Indexing, Relationships, Optimization...",
      rating: "4.4",
      reviews: "14K"
    }
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
    <div className='review-container flex flex-col gap-9'>
      <div className='px-5 flex flex-col gap-5'>
        <div className='w-full flex justify-center py-4 text-[45px] font-bold'>
          <h1>Career-Link Certifications</h1>
        </div>
          <div
            className='grid gap-7
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-3
            place-items-center'
          >
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
          <div className='w-full flex justify-center'>
            <button className='bg-amber-50 py-[5px] px-[10px] rounded-[8px] text-[17px] font-bold'>More..</button>
          </div>
      </div>
      <div>
        <QuotesCard quote={quotes[index].qoute} name={quotes[index].name} image={quotes[index].image} fade={fade}/>
      </div>
        <h1>This is Review section</h1>
    </div>
  )
}

export default Review