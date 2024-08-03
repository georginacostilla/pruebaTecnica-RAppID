import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../home/card.css'

const DetailCard = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col className='mx-2 my-2 m-2 mt-3'>
            <Card style={{ width: '16rem' }} className="card">
              <Card.Img variant="top" src={"https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/1687191179_Alelliott-pokemon-picachu-pokemon.jpeg&width=600&height=600&quality=90&format=auto&fit=pad"} alt={""} />
              <Card.Body className="text-center bg-white">
                <Card.Title>Pokemon</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Link to={"/favoritos"}><button>Agregar a favoritos</button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DetailCard