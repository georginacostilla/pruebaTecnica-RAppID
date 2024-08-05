import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useCardPokemon from "../../stores/CardPokemon";
import '../home/card.css'

const DetailCard = () => {

  const cardPoke = useCardPokemon((state) => state.cardPoke);
  const getCardsPokemonByName = useCardPokemon((state) => state.getCardsPokemonByName);
  const nombre = useParams()

  useEffect(() => {
    getCardsPokemonByName(nombre);
  }, [getCardsPokemonByName]);

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-75 mt-3">
        {cardPoke ? <Row>
          <Col>
            <Card style={{ width: '18rem' }} className="card">
              <Card.Img variant="top" src={cardPoke.sprites.front_default} alt={cardPoke.name} />
              <Card.Body className="text-center bg-white">
                <Card.Title className="mb-3">{cardPoke.name}</Card.Title>
                <Card.Text><strong>Tipo:</strong> {cardPoke.types[0].type.name}</Card.Text>
                <div>
                  <strong>Habilidades:</strong>
                  <ul className="list-group">
                    {cardPoke.abilities.map((habilidad, index) => (
                      <li className="list-group-item border-0" key={index}>{habilidad.ability.name}</li>
                    ))}
                  </ul>
                </div>
                <Card.Text><strong>Estadísticas:</strong></Card.Text>
                <Card.Text>Vida inicial: {cardPoke.stats[0].base_stat}</Card.Text>
                <Card.Text>Ataque inicial: {cardPoke.stats[1].base_stat}</Card.Text>
                <Card.Text>Defensa inicial: {cardPoke.stats[2].base_stat}</Card.Text>
                <Link to={`/favoritos/${cardPoke.name}`}><button>Agregar a favoritos</button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row> : <><h1>Ups... Error</h1></>}
      </Container>
    </>
  )
}

export default DetailCard