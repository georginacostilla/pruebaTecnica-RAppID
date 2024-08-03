import { Form, Container } from 'react-bootstrap';

const BuscadorNombre = () => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Buscar Pokémon:</Form.Label>
            <Form.Control
              type="text"
              value={""}
              onChange={""}
              placeholder="escribe aquí "
              className="w-25"
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default BuscadorNombre;