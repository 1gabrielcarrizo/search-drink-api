import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const Formulario = () => {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='nombre'>Nombre de la bebida</Form.Label>
                    <Form.Control id='nombre' type='text' placeholder='Ej: Tequila, Vodka, etc' name='nombre'/>
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className='mb-3'>
                    <Form.Label htmlFor='categoria'>Categoria de la bebida</Form.Label>
                    <Form.Select id='categoria' name='categoria'>
                        <option>Selecciona la categoria</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario