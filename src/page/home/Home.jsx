import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './card.css'
import BuscadorNombre from "../../components/buscador/BuscadorNombre";

const Home = () => {

  return (
    <>
      <Container className="mt-3">
        <BuscadorNombre></BuscadorNombre>
        <Row>
          <Col className='mx-2 my-2 m-2 mt-3'>
            <Card style={{ width: '16rem' }} className="card">
              <Card.Img variant="top" src={"https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/1687191179_Alelliott-pokemon-picachu-pokemon.jpeg&width=600&height=600&quality=90&format=auto&fit=pad"} alt={""} />
              <Card.Body className="text-center bg-white">
                <Card.Title>Pokemon</Card.Title>
                <Link to={"/detailCard"}><button>Ver más</button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;