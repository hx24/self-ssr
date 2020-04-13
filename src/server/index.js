import express from 'express'
import { render } from './utils'
import mockApi from './mockApi'

const app = express()
app.use(express.static('public')) // 配置所有静态文件请求的路径为根目录下的public文件夹

mockApi(app)

app.get('*', function(req, res) {
  res.send(render(req))
})

app.listen(3000, () => {
  console.log('server listen on 3000')
})
