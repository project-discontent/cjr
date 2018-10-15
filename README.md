## Progressive Massachusetts - CJR Microsite

This repository contains the source code for Progressive Massachusetts' CJR campaign microsite. The site is built using react-static, which compiles to static html, css, and js for deployment to production. The original template is designed for a multi-page site, but since this is a single page, there's only a few files you need to pay attention to. The main page lives in `src/containers/home`. That file imports a few components (navbar, footer, etc) from the `src/components` directory. Most of those components have stylesheets co-located with them.

## Instructions

1. To install: `git clone git@github.com:project-discontent/cjr.git && cd cjr && yarn install`
2. To run: `yarn start`
3. To build `yarn build` This step will compile all of the files to html, css, and js in the `/dist` folder, which can be pushed to whichever service will host the site.
