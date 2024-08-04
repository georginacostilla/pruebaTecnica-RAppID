import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './card.css';
import BuscadorNombre from "../../components/buscador/BuscadorNombre";
import useCardPokemon from "../../stores/CardPokemon";
import { useEffect } from "react";

const Home = () => {
  const cardsPoke = useCardPokemon((state) => state.cardsPoke);
  const loading = useCardPokemon((state) => state.loading);
  const error = useCardPokemon((state) => state.error);
  const getCardsPokemon = useCardPokemon((state) => state.getCardsPokemon);

  useEffect(() => {
    getCardsPokemon();
  }, [getCardsPokemon]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <Container className="mt-3">
      <BuscadorNombre />
      <Row>
        {cardsPoke.length > 0 ? (
          cardsPoke.map((card, index) => (
            <Col className='mx-2 my-2 d-flex justify-content-center align-items-center' key={index}>
              <Card style={{ width: '16rem' }} className="card">
                <Card.Img variant="top" src={card.url} alt={card.name} />
                <Card.Body className="text-center bg-white">
                  <Card.Title>{card.name}</Card.Title>
                  <Link to={`/detailCard/${card.index}`}>
                    <button>Ver más</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12} className='text-center'>
            <p>No hay cards disponibles</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Home;