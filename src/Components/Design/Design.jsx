import React from 'react'
import Img from './img/Rectangle (2).png'
import './Design.css'
const Design = () => {
  return (
    <>
      <div className="design">
        <div className="container">
          <div className="design-container">
            <h1 className="design-text">
              Remote-first. Secure by design.
            </h1>
            <img src={Img} alt="" className="design-img" />
            <p className="design-info">
              You no longer need an over-powered laptop to code, Gitpod works just as <br />
              smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes  <br />
              all source code and never stores it on insecure machines and networks.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Design