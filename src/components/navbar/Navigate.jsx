import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logoDosPokemon.png'
import '../navbar/navigate.css'

const Navigate = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container className='m-4'>
          <Navbar.Brand href="#home"><img className='imgStyle' src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Inicio</Nav.Link>
              <Nav.Link>Favoritos ⭐</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigate