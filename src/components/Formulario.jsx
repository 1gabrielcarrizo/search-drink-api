import React, { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')

    const { categorias } = useCategorias()
    const {consultarBebida} = useBebidas()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
    }

    return (
        <Form onSubmit={handleSubmit}>
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>Nombre de la bebida</Form.Label>
                        <Form.Control id='nombre' type='text' placeholder='Ej: Tequila, Vodka, etc' value={busqueda.nombre} name='nombre' onChange={(e) => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Categoria de la bebida</Form.Label>
                        <Form.Select id='categoria' name='categoria' value={busqueda.categoria} onChange={(e) => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}>
                            <option>Selecciona la categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.strCategory} value={categoria.strCategory}>
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-end mt-4'>
                <Col md={3}>
                    <Button variant='danger' className='text-uppercase w-100' type='submit'>
                        Buscar categoria
                        </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario