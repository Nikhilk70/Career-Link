import React from 'react'
import logo from "../../assets/Images/Logo-T.png";

function About() {
  return (
    <div className='flex aboutSection'>
      <div className='aboutText h-[100dvh] flex flex-col '>
        <div className='heading'>
          <img className='' src={logo} alt="Not Available" />
          <h2>Why Choose Career Link</h2>
        </div>
        <div className='aboutList'>
          <ul>
            <li><b>Smart Job Matching:</b> AI-powered recommendations for faster hiring.</li>
            <li><b>Verified Employers:</b> Trusted companies with real opportunities.</li>
            <li><b>Easy Applications:</b> Apply with one click and track your status.</li>
            <li><b>Remote & Local Jobs:</b> Work from anywhere or nearby.</li>
          </ul>
        </div>
      </div>
      <div className='aboutVideo flex items-center justify-center'>
        <video
          src="https://res.cloudinary.com/dxjdraawa/video/upload/v173183/videoplayback_kdxk91.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        ></video>
      </div>
    </div>
  )
}

export default About