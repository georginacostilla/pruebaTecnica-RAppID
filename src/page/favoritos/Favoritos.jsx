import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useCardPokemon from '../../stores/CardPokemon';

const Favoritos = () => {
  const favoritos = useCardPokemon((state) => state.favoritos)
  const addFavorito = useCardPokemon((state) => state.addFavorito)
  const nombre = useParams()
  console.log(favoritos)

  useEffect(() => {
    if (nombre.name && nombre.name !== ":name") {
      addFavorito(nombre.name);
    }
  }, [nombre, addFavorito])

  return (
    <Container className="d-flex justify-content-center align-items-center vh-75 mt-3">
      <Row>
        <Col>
          <h3 className="text-light">Lista de favoritos:</h3>
          <ListGroup as="ol" numbered className='w-100 mt-4'>
            {favoritos.map((favorito, index) => <ListGroup.Item key={index} as="li">{favorito}</ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>
    </Container >
  )
}

export default Favoritos;