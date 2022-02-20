import React from 'react'
import "./intro.css"
import PhotoOfAndy from "../../img/andy-t.png"

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <img src={PhotoOfAndy} alt="Photo of Andy smiling" className='i-img'/>
        </div>
        <div className='i-right'>
            <div className='i-right-wrapper'>
                <h2 className='i-intro'>Hi, I'm</h2>
                <h1 className='i-name'>Andy Couto</h1>
                <div className='i-title'>
                    <div className="i-title-wrapper">
                        <div className="i-title-item">iOS Developer</div>
                        <div className="i-title-item">Animal Lover</div>
                        <div className="i-title-item">Hiker</div>
                        <div className="i-title-item">Innovator</div>
                    </div>                    
                </div>
                <div>
                    Ever since I decided to make the switch from Psychology to Computer Science I have been in love with programming. 
                    I spend most of my day developing Panera's mobile iOS application, but love to learn new technology during my off-hours. 
                    I am grateful to love what I do.
                </div>
                <div>
                    Skills: iOS Development (mobile & kiosk), Swift, Obj-C, App Clips, Siri, Widgets, UIKit, MapKit, Networking, Analytics, Firebase, Integration Testing
                </div>
                <div>
                    Interests: ARKit, SwiftUI, new & exciting tech
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro