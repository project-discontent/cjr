import React from 'react'

export default ({ Html, Head, Body, children, siteData, renderMeta }) =>
  <Html lang="en-US">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://fast.wistia.com/embed/medias/g254byqewk.jsonp" async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <title>Progressive Massachusetts | CJR</title>
    </Head>
    <Body>{children}</Body>
  </Html>
