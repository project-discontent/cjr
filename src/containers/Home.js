import React from 'react'
import { withSiteData } from 'react-static'

import CTA, { MiniQuote } from '../components/CTA'
import Embed from '../components/Embed'
import ImageQuote from '../components/ImageQuote'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'

import cellImg from '../static/cell.png'
import davidImg from '../static/david_bg.png'

export default withSiteData(() => (
  <div>
    <img src={cellImg} alt="Image of a prison cell with a shaft of light from a small window" />
    <Embed />
    <Spacer height="12vh"/>
    <Stats />

    <Spacer height="12vh"/>

    <CTA>
      <a className="emphasize" href="#">Learn more</a> about the provisions of this bill and the fight to get it passed.
    </CTA>

    <Spacer height="12vh"/>

    <ImageQuote alt="Image of David Sloan" src={davidImg} attribution="David Sloan, Progressive Massachusetts">
      "Having a program, a structure, an organization around the state gives us a lot of opportunity to plug people in week after week."
    </ImageQuote>

    <Spacer height="12vh"/>

    <CTA>
      Support an organization dedicated to organized action and real change.
    </CTA>

    <MiniQuote>
      We need your help to take the next step.
    </MiniQuote>

    <Spacer height="12vh"/>

    <div className="pm__donation-form pm--centered">
      Donation Form
    </div>

    <Spacer height="12vh"/>

    <Footer />

    <Spacer height="12vh"/>
  </div>
))
