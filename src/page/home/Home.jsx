import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useCardPokemon from "../../stores/CardPokemon-Store";
import { useEffect } from "react";

const Home = () => {
  const cardsPokemon = useCardPokemon((state) => state.cardsPokemon);
  // const loading = useCardPokemon((state) => state.loading);
  // const error = useCardPokemon((state) => state.error);
  const getCardPokemon = useCardPokemon((state) => state.getCardPokemon);

  useEffect(() => {
    getCardPokemon();
  }, [getCardPokemon]);

  return (
    <>
      <Container className="mt-3">
        <Row>
          {cardsPokemon.length > 0 ? (
            cardsPokemon.map((cardPokemon) => (
              <Col className='mx-2 my-2'>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src={""} alt={cardPokemon.name} /> */}
                  <Card.Body>
                    <Card.Title>{cardPokemon.name}</Card.Title>
                    <Button variant="primary">Ver</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>Pokémon no disponible.</p>
          )}
        </Row>
      </Container>
    </>
  )
}

export default Home;