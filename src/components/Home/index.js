import React from 'react'
// const React = require('react')

// renderToString方法只能渲染出静态的html字符串，并不处理js事件

// 同构：一套React代码，在服务器端渲染一遍后，再在客户端执行一遍，使js在客户端生效。

const Home = () => {
  return (
    <div>
      home
      <button
        onClick={() => {
          alert('hello')
        }}
      >
        click me
      </button>
    </div>
  )
}

export default Home
