import React from 'react'
import './Started.css'
import Github from './img/Vector (9).png'
import Gitlab from './img/Frame (6).png'
import Bit from './img/Frame (7).png'
import { SiNodedotjs, SiPython, SiRust, SiSvelte } from 'react-icons/si'
import { BiLogoGoLang } from 'react-icons/bi'
import { FaJava } from 'react-icons/fa'

const workspaces = [
  { name: 'Node or TypeScript', icon: <SiNodedotjs  color="#339933" size={24} /> },
  { name: 'Python',             icon: <SiPython     color="#3776AB" size={24} /> },
  { name: 'Go',                 icon: <BiLogoGoLang color="#00ADD8" size={26} /> },
  { name: 'Rust',               icon: <SiRust       color="#000000" size={24} /> },
  { name: 'Java',               icon: <FaJava       color="#f89820" size={24} /> },
  { name: 'Svelte',             icon: <SiSvelte     color="#FF3E00" size={24} /> },
]

const Started = () => {
  return (
    <>
      <div className="started">
        <div className="container">
          <div className="started-container">
            <h1 className="started-text">Get started now</h1>
            <div className="sides">

              <div className="left-side">
                <h2 className="side-title">Connect Git repository</h2>
                <p className="side-subtitle">
                  Select a Git provider to start with an existing project from any Git context.
                </p>

                <div className="git-buttons">
                  <button className="git-btn gitlab">
                    <img src={Gitlab} alt="" />
                    Continue with GitLab
                  </button>

                  <button className="git-btn github">
                    <img src={Github} alt="" />
                    Continue with GitHub
                  </button>

                  <button className="git-btn bitbucket">
                    <img src={Bit} alt="" />
                    Continue with Bitbucket
                  </button>
                </div>

                <p className="git-prefix-text">
                  Or prefix any GitLab, GitHub or Bitbucket URL with
                </p>
                <span className="git-prefix-badge">gitpod.io/#</span>
              </div>

              {/* RIGHT SIDE */}
              <div className="right-side">
                <h2 className="side-title">Launch an example workspace</h2>
                <p className="side-subtitle">Dive into one of our example workspaces</p>

                <ul className="workspace-list">
                  {workspaces.map((ws) => (
                    <li className="workspace-item" key={ws.name}>
                      <div className="workspace-info">
                        <span className="workspace-icon">{ws.icon}</span>
                        <span className="workspace-name">{ws.name}</span>
                      </div>
                      <button className="launch-btn">Launch workspace</button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Started