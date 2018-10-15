import React from 'react'


import logoImg from '../static/logo_pm_gray.png'
import pdLogoImg from '../static/discontent_icon.png'
import './Footer.css'

export default (props) =>
  <div className="pm__footer">
    <div className="pm__organization">
      <img className="progressive-mass__logo" src={logoImg} alt="Progressive Massachusetts Logo"/>
      <p>
        <a href="#">Progressive Massachusetts</a> is a statewide, diverse, grassroots, organization that organizes for progressive change in Massachusetts. We help elect and support progressive candidates for public office who are committed to making a difference on these issues, and we hold elected officials accountable to progressive positions and values. We welcome all progressives regardless of political organizing. Through issue and electoral organizing, as well as organization building and education, we are working to advance progressive values.
      </p>
    </div>
    <div className="pm__organization">
      <img className="discontent__logo" src={pdLogoImg} alt="Project Discontent Logo"/>
      <p>
        This video, website, and blog post were created by volunteers at <a href="http://www.projectdiscontent.com">Project Discontent</a>. Project Discontent is a volunteer collaborative that helps extend the reach of footer fighting for justice and equality, using video, design, writing, and web development.
        <br/>
        Follow us on <a href="#">Twitter</a> and <a href="#">Instagram</a>.
      </p>
    </div>
  </div>