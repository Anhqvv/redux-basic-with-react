import FormAddNew from './FormAddNew'
import Header from './Header'
import TableUser from './TableUser'
import Container from 'react-bootstrap/Container'

const Home = props => {
  return (
    <>
      <Header />
      <Container>
        <FormAddNew />
        <hr/>
        <TableUser />
      </Container>
    </>
  )
}

export default Home
