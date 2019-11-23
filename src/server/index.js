import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../components/Home'

const app = express()
app.use(express.static('public')) // 配置所有静态文件请求的路径为根目录下的public文件夹

app.get('/', function(req, res) {
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

app.get('/home', function(req, res) {
  const content = renderToString(<Home />)
  res.send(`
    <html>
      <head>
        <title>ssr home</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)
})

var server = app.listen(3000, () => {
  console.log('server listen on 3000')
})
