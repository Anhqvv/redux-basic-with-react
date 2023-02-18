import React from 'react'

import './App.css'

import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter } from './redux/action/action'

function App (props) {
  return (
    <div className='App'>
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter1()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter1()}>Decrease Count</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter1: () => dispatch(increaseCounter()),

    decreaseCounter1: () => dispatch(decreaseCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
