import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Favoritos = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-75 mt-3">
      <Row>
        <Col>
          <h3 className="text-light">Lista de favoritos:</h3>
          <ListGroup as="ol" numbered className='w-100 mt-4'>
            <ListGroup.Item as="li">Cras justo</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favoritos;