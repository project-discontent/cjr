import React from 'react'
import './CTA.css';

export default ({ children }) =>
  <p className="pm__cta">
    {children}
  </p>

export const MiniQuote = ({ children }) =>
  <p className="pm__mini-quote">
    {children}
  </p>