import React, { useState, useEffect, useRef } from 'react'
import './Users.css'
import Logos from './img/Frame (5).png'
const testimonials = [
  {
    id: 1,
    text: "GitPod is incredibly cool. In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    role: "Creator and Co-founder",
    handle: "@foremand @ThePracticalDev",
    avatar: "BH",
    color: "#e8d5c4",
  },
  {
    id: 2,
    text: "Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked. Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)",
    name: "Michael Friedrich",
    role: "Developer Evangelist",
    handle: "@GitLab",
    avatar: "MF",
    color: "#c4d5e8",
  },
  {
    id: 3,
    text: "Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending \"gitpod.io/#\" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!",
    name: "Julius Volz",
    role: "Creator",
    handle: "@PrometheusIO",
    avatar: "JV",
    color: "#d5e8c4",
  },
  {
    id: 4,
    text: "I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “http://gitpod.io/#” to the URL. A+ tool all around.",
    name: "David Ressler",
    role: "Engineering Manager",
    handle: "@ServerlessHQ",
    avatar: "DM",
    color: "#e8c4d5",
  },
]

const VISIBLE_COUNT = 3
const INTERVAL_MS = 3000

const Users = () => {
  const [current, setCurrent] = useState(0)
const intervalRef = useRef(null)  // jsx uchun
  const total = testimonials.length

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total)
    }, INTERVAL_MS)
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + total) % total)
    startInterval()
  }

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % total)
    startInterval()
  }

  const getVisible = () => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) =>
      testimonials[(current + i) % total]
    )
  }

  const visibleCards = getVisible()

  return (
    <>
      
<div className="container">

      <div className="users-section">
        <div className="users-container">
          <div className="users-header">
            <h1 className="users-text">
              Used by 400,000+ developers.
            </h1>
            <div className="slider-controls">
              <button className="slider-btn" onClick={handlePrev} aria-label="Previous">
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button className="slider-btn" onClick={handleNext} aria-label="Next">
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          <div className="cards-wrapper">
            {visibleCards.map((card, i) => (
              <div
                className="user-card"
                key={`${card.id}-${current}-${i}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className="card-quote">{card.text}</p>
                <div className="card-author">
                  <div
                    className="card-avatar"
                    style={{ background: card.color }}
                  >
                    {card.avatar}
                  </div>
                  <div className="card-info">
                    <span className="card-name">{card.name}</span>
                    <span className="card-role">{card.role}</span>
                    <span className="card-handle">{card.handle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="dots">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => { setCurrent(i); startInterval() }}
              />
            ))}
          </div>
        </div>
      </div>
      <img src={Logos} alt="" className="logos" />
</div>
    </>
  )
}

export default Users