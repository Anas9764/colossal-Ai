import React from 'react'
import "./Earth.css"
import earthBg from '../../assets/videos/earth.mp4'

function Earth() {
  return (
    <div className='mainbg'>
        <div className="overlays">
        <video className='eart' src={earthBg} autoPlay loop muted />
        </div>
        </div>
  )
}

export default Earth