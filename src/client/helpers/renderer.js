import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../components/Home'

export default () => {
  const content = renderToString(<Home />)

  const html = `
    <html>
      <head>
        <body>
          <div id="app">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html> 
  `
  return html
}