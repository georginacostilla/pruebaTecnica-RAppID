import { Form, Container } from 'react-bootstrap';

const SearchName = ({buscar, handleFiltrar}) => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Buscar Pokémon:</Form.Label>
            <Form.Control
              type="text"
              value={buscar}
              onChange={handleFiltrar}
              placeholder="escribe aquí "
              className="w-100 w-lg-25"
              style={{ maxWidth: '300px' }}
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default SearchName;