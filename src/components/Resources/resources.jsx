import React from 'react'
import Resource from '../Resource/resource'
import './resources.css'

const Resources = () => {
  return (
    <div className="rl">
        <div className="rl-text">
            <h1 className="rl-title">Resources</h1>
        </div>
        <div className="rl-list">
        <Resource/>
        <Resource/>
        <Resource/>
        <Resource/>
        </div>
    </div>
  )
}

export default Resources