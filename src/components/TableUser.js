import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'

function TableUser () {
  const [listUsers, setListUsers] = useState([])
  const fetchAllUser = async () => {
    const res = await axios.get('http://localhost:8081/users/all')
    const data = res && res.data ? res.data : []
    setListUsers(data)
  }
  useEffect(() => {
    fetchAllUser()
  }, [])
  console.log('listUsers:', listUsers)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Password</th>
          <th>Username</th>
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
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}

export default TableUser
