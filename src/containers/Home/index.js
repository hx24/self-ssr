import React from 'react'
import Header from '../../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
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
