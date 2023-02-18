import React from 'react'

import './App.css'

// import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter } from './redux/action/action'
import { useDispatch, useSelector } from 'react-redux'

function App (props) {
  const count1 = useSelector(state => {
    return state.counter.count
  })
  const dispatch = useDispatch()
  const handleIncrease = () => {
    dispatch(increaseCounter())
  }

  const handleDescrease = () => {
    dispatch(decreaseCounter())
  }
  return (
    <div className='App'>
      <div>Count: {count1}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => handleDescrease()}>Decrease Count</button>
    </div>
  )
}

export default App
