import React from 'react'

import style from "./ImageQuote.css"

export default ({ alt, attribution, children, src }) =>
  <div className="pm__image-quote">
    <img src={src} alt={alt} />
    <div className="pm__image-quote__container pm--max-contained">
      <div className="pm__image-quote__quote">
        {children}
        <div className="pm__image-quote__attribution">
          {attribution}
        </div>
      </div>
    </div>
  </div>
