import React from 'react'
import "./Hero.css"
import videoBg from '../../assets/videos/main.mp4'

const Hero = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video className="herobg" src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>WE HELP</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}

export default Hero