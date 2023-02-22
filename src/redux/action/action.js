import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './type'

export const increaseCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT
  }
}

export const fetchAllUsers = () => {
  return async (dispatch, getstate) => {
    dispatch(fetchUserRequest())

    try {
      const res = await axios.get('http://localhost:8082/users/all')
      const data = res && res.data ? res.data : []
      dispatch(fetchUserSuccess(data))
    } catch (error) {
      dispatch(fetchUserError)
    }
  }
}
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: data
  }
}

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}
