import React from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

// import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter } from './redux/action/action'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home'

function App (props) {
  const fetchAllUser = async () => {
    const res = await axios.get('http://localhost:8081/users/all')
    console.log('checking fetchAllUser', res)
    return res
  }
  useEffect(() => {
    fetchAllUser()
  }, [])
  return <Home />
  // const count1 = useSelector(state => {
  //   return state.counter.count
  // })
  // const dispatch = useDispatch()
  // const handleIncrease = () => {
  //   dispatch(increaseCounter())
  // }

  // const handleDescrease = () => {
  //   dispatch(decreaseCounter())
  // }
  // return (
  //   <div className='App'>
  //     <div>Count: {count1}</div>

  //     <button onClick={() => handleIncrease()}>Increase Count</button>

  //     <button onClick={() => handleDescrease()}>Decrease Count</button>
  //   </div>
  // )
}

export default App
