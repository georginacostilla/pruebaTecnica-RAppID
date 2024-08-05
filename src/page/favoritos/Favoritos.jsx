import React, { useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useCardPokemon from '../../stores/CardPokemon';

const Favoritos = () => {
  const { favoritos, loadFavoritos, addFavorito } = useCardPokemon(state => ({
    favoritos: state.favoritos,
    loadFavoritos: state.loadFavoritos,
    addFavorito: state.addFavorito
  }));
  
  const { name } = useParams();

  useEffect(() => {
    loadFavoritos();
  }, [loadFavoritos]);

  useEffect(() => {
    if (name && name !== ":name") {
      addFavorito(name);
    }
  }, [name, addFavorito]);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-75 mt-3">
      <Row>
        <Col>
          <h3 className="text-light">Lista de favoritos:</h3>
          <ListGroup as="ol" numbered className='w-100 mt-4'>
            {favoritos.map((favorito, index) => (
              <ListGroup.Item key={index} as="li">{favorito}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favoritos;