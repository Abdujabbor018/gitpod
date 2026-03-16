import React, { useState } from 'react'
import './Footer.css'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { IoChatbubbleEllipses } from 'react-icons/io5'

const Footer = () => {
  const [cookieVisible, setCookieVisible] = useState(true)

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-links">

            <div className="footer-col">
              <h4 className="footer-col-title">Gitpod</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Self-Hosted</a></li>
                <li><a href="#">Gitpod vs GitHub Codespaces</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Developer</h4>
              <ul>
                <li><a href="#">Getting started</a></li>
                <li><a href="#">Screencasts</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Report a bug</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Media Kit</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Legal</h4>
              <ul>
                <li><a href="#">Imprint</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-brand">
              <span className="footer-logo">G</span>
              <span className="footer-copy">Copyright © 2021Gitpod</span>
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="Chat"><IoChatbubbleEllipses /></a>
            </div>
          </div>
        </div>
      </footer>

      {cookieVisible && (
        <div className="cookie-bar">
          <p>
            This website uses cookies to enhance the user experience. Read our{' '}
            <a href="#">privacy policy</a> for more info.
          </p>
          <button onClick={() => setCookieVisible(false)}>Accept Cookies</button>
        </div>
      )}
    </>
  )
}

export default Footer