import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'

const Home = props => {
  return (
    <div>
      <Header />
      home, hi, this is {props.name}
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

const mapStateToProps = state => ({
  name: state.home.name
})

export default connect(mapStateToProps, null)(Home)
