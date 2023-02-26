import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux'

const Header = props => {
  const listUsers = useSelector(state => state.user.listUsers)
  const counter = listUsers.length
  console.log('listUsers from Header', listUsers)
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <NavDropdown
            style={{ marginLeft: '50px' }}
            title={`(${counter} Users`}
            id='basic-nav-dropdown'
          >
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map(item => {
                return (
                  <NavDropdown.Item href='#!' key={item.id}>
                    {item.email}
                  </NavDropdown.Item>
                )
              })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
