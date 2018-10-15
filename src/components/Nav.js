import React from 'react'
import { Link } from 'react-static'


import './Nav.css'

const Logo = (props) =>
  <Link exact to="/" style={{ fontSize: "2vh", textAlign: "left", lineHeight: "1.35em" }} >
    PROGRESSIVE
    <br/>
    MASSACHUSETTS
  </Link>

const CTA = (props) =>
  <button className="pm-button pm-navbar__cta">
    Join the movement
  </button>


export default (props) =>
  <nav className="pm-navbar">
    <div className="pm--max-contained pm--space-between pm--centered">
      <Logo />
      <CTA />
    </div>
  </nav>
