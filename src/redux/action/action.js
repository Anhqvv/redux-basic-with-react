import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
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
      dispatch(fetchUserError())
    }
  }
}
//fetchAllUser
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
//creteNewUser
export const fetchCreateUsers = (email, password, username) => {
  return async (dispatch, getstate) => {
    dispatch(createUserRequest())
    try {
      const res = await axios.post('http://localhost:8082/users/create', {
        email,
        username,
        password
      })
      if (res && res.data && res.data.errCode === 0) {
        dispatch(createUserSuccess())
        dispatch(fetchAllUsers())
      }
    } catch (error) {
      dispatch(createUserError())
    }
  }
}

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST
  }
}

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  }
}

export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR
  }
}
