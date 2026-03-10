import React from 'react'
import './Header.css'
import Logo1 from './img/Group (7).png'
import Logo2 from './img/Frame (2).png'
import Logo3 from './img/Frame (1).png'
import HeaderBanner from './img/Rectangle.png'
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header-container">
                <div className="header-left">
                    <h1 className="header-main-text">
                        Always Ready to Code
                    </h1>
                    <p className="header-info">
                        Spin up fresh, automated dev environments <br />
                        for each task, in the cloud, in seconds.
                    </p>
                    <button className="header-btn">
                        Try Now
                    </button>
                    <p className="header-second-info">
                        Open a workspace. <br />
                        Start from any Git context.
                    </p>
                    <div className="header-logos">
                        <img src={Logo1} alt="" className="header-logo" />
                        <img src={Logo2} alt="" className="header-logo" />
                        <img src={Logo3} alt="" className="header-logo" />
                    </div>
                </div>
                <img src={HeaderBanner} alt="" className="header-img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header