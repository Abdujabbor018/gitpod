import React from 'react'
import Logo from './img/Frame.png'
import './Navbar.css'
const Navbar = () => {
  return (
   <>
   <div className="navbar">
    <div className="container">
        <div className="navbar-container">
            <img src={Logo} alt="" className="navbar-logo" />
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="" className="navbar-link">Features</a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">Pricing</a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">Blog</a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">Docs</a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">Changelog</a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">We're hiring</a>
                </li>
            </ul>
            <button className="navbar-button">
                Login
            </button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar