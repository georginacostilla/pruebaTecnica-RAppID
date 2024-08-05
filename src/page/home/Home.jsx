import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchName from "../../components/buscador/SearchName";
import useCardPokemon from "../../stores/CardPokemon";
import './card.css';

const Home = () => {
  const { cardsPoke, loading, error, getCardsPokemon, typeFilter, setTypeFilter } = useCardPokemon(state => ({
    cardsPoke: state.cardsPoke,
    loading: state.loading,
    error: state.error,
    getCardsPokemon: state.getCardsPokemon,
    typeFilter: state.typeFilter,
    setTypeFilter: state.setTypeFilter,
  }));

  const [buscar, setBuscar] = useState("");
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    getCardsPokemon();
  }, [getCardsPokemon]);

  useEffect(() => {
    let filtered = cardsPoke;

    if (typeFilter) {
      filtered = filtered.filter(pokemon => pokemon.types.includes(typeFilter));
    }

    if (buscar) {
      filtered = filtered.filter(pokemon => pokemon.name.toLowerCase().includes(buscar.toLowerCase()));
    }

    setResultado(filtered);
  }, [buscar, cardsPoke, typeFilter]);

  if (loading) {
    return <div className="text-center text-light">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-light">Error: {error}</div>;
  }

  const handleFiltrar = (e) => {
    setBuscar(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  return (
    <Container className="mt-3">
      <div className="mb-3">
        <SearchName buscar={buscar} handleFiltrar={handleFiltrar} />
        <label htmlFor="typeFilter" className="text-light m-2">Filtrar por tipo:</label>
        <select id="typeFilter" onChange={handleTypeChange} value={typeFilter}>
          <option value="">Todos</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
        </select>
      </div>
      <Row>
        {resultado.length === 0 ? (
          <Col xs={12} className='text-center'>
            <p>No hay cards disponibles</p>
          </Col>
        ) : (
          resultado.map((card, index) => (
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
        )}
      </Row>
    </Container>
  );
};

export default Home;