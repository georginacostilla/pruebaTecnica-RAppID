import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchName from "../../components/buscador/SearchName";
import useCardPokemon from "../../stores/CardPokemon";
import './card.css';

const Home = () => {
  const cardsPoke = useCardPokemon((state) => state.cardsPoke);
  const loading = useCardPokemon((state) => state.loading);
  const error = useCardPokemon((state) => state.error);
  const getCardsPokemon = useCardPokemon((state) => state.getCardsPokemon);

  const [buscar, setBuscar] = useState("");
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    getCardsPokemon();
  }, [getCardsPokemon]);

  if (loading) {
    return <div className="text-center text-light">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-light">Error: {error}</div>;
  }

  const handleFiltrar = (e) => {
    const valor = e.target.value
    setBuscar(valor)
    if (valor) {
      const filter = cardsPoke.filter((pokemon) => pokemon.name.toLowerCase().includes(valor.toLowerCase()))
      setResultado(filter)
    } else {
      setResultado([])
    }
  }

  return (
    <Container className="mt-3">
      <SearchName buscar={buscar} handleFiltrar={handleFiltrar} />
      <Row>
        {resultado.length === 0 ? (
          cardsPoke.length > 0 ? (
            cardsPoke.map((card, index) => (
              <Col className='mx-2 my-2 d-flex justify-content-center align-items-center' key={index}>
                <Card style={{ width: '16rem' }} className="card">
                  <Card.Img variant="top" src={card.url} alt={card.name} />
                  <Card.Body className="text-center bg-white">
                    <Card.Title>{card.name}</Card.Title>
                    <Link to={`/detailCard/${card.name}`}>
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
          )
        ) : (
          resultado.length > 0 ? (
            resultado.map((card, index) => (
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
          )
        )}
      </Row>
    </Container>
  );
};

export default Home;