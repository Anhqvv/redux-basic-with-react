import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserRedux, fetchAllUsers } from '../redux/action/action'
function TableUser () {
  const dispatch = useDispatch()
  const listUsers = useSelector(state => state.user.listUsers)
  const isLoading = useSelector(state => state.user.isLoading)
  const isError = useSelector(state => state.user.isError)

  //call api
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  const handleDeleteUser = (id) => {
    dispatch(deleteUserRedux(id))
    
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <>
          {isError === true ? (
            <tr>
              <td>isError..., please try again</td>
            </tr>
          ) : (
            <>
              {isLoading === true ? (
                <tr>
                  <td>isLoading... Please watting ... </td>
                </tr>
              ) : (
                <>
                  {listUsers &&
                    listUsers.length > 0 &&
                    listUsers.map(user => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.email}</td>
                          <td>{user.username}</td>
                          <td>
                            <button
                              className='btn btn-danger'
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                </>
              )}
            </>
          )}
        </>
      </tbody>
    </Table>
  )
}

export default TableUser
