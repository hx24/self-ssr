import express from 'express'
import Home from './components/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', function (req, res) {
  res.send(`
    <html>
      <head>
        <title>test page</title>
      </head>
      <body>
        <h1>first page</h1>
        <p>hello world</p>
      </body>
    </html>
  `)
})

// app.get('/home', function (req, res) {
//   res.send(renderToString(<Home/>))
// })


app.get('/home', function (req, res) {
  const content = renderToString(<Home/>)
  res.send(`
    <html>
      <head>
        <title>ssr home</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `)
})



var server = app.listen(3000, () => {
  console.log('server listen on 3000', )
})