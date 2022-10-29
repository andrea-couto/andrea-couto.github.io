import React from 'react'
import "./Intro.css"
import PhotoOfAndy from "../../img/andy.png"
import SocialFollow from '../SocialFollow/SocialFollow'

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <img src={PhotoOfAndy} alt="Andy smiling" className='i-img'/>
        </div>
        <div className='i-right'>
            <div className='i-right-wrapper'>
                <h2 className='i-intro'>Hi, I'm</h2>
                <h1 className='i-name'>Andy Couto</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">                    
                        <ul className="i-title-wrapper-list">
                        <li className="i-title-wrapper-list-item">iOS Developer</li>
                        <li className="i-title-wrapper-list-item">Animal Lover</li>
                        <li className="i-title-wrapper-list-item">Hiker</li>
                        <li className="i-title-wrapper-list-item">Innovator</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Ever since I decided to make the switch from Psychology to Computer Science I have been in love with programming. 
                    I spend most of my day developing Panera's mobile iOS application, but love to learn new technology during my off-hours. 
                    I am grateful to love what I do.
                </p>
                <p>
                    Skills: iOS Development (mobile & kiosk), Swift, Obj-C, App Clips, Siri, Widgets, UIKit, MapKit, Networking, Analytics, Firebase, Integration Testing
                </p>
                <p>
                    Interests: ARKit, Photogrammetry / 3D modeling, SwiftUI, new & exciting tech
                </p>
                <SocialFollow />
            </div>
        </div>
    </div>
  )
}

export default Intro