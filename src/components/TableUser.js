import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../redux/action/action'
function TableUser () {
  const dispatch = useDispatch()
  const listUsers = useSelector(state => state.user.listUsers)
  //call api
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Password</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map(user => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.username}</td>
                <td>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}

export default TableUser
