import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logoDosPokemon.png';
import '../navbar/navigate.css';
import { Link } from 'react-router-dom';

const Navigate = () => {
  return (
    <>
      <Navbar expand="lg" className='bg-black' data-bs-theme="dark">
        <Container className='m-4'>
          <Navbar.Brand><img className='imgStyle' src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-3" style={{ fontSize: '1.25rem' }}>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/favoritos/:name">Favoritos ⭐</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigate