import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({ bebida }) => {

    const {handleModalClick, handleBebidaIdClick} = useBebidas()

    return (
        <Col md={6} lg={3} className='mb-4'>
            <Card className='mb-4 h-100'>
                <Card.Img
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />
                <Card.Body className='flex-grow-1 d-flex flex-column'>
                    <div>
                        <Card.Title>{bebida.strDrink}</Card.Title>
                    </div>
                    <div className='mt-auto'>
                        <Button variant='warning' className='w-100 text-uppercase' onClick={() => {
                            handleModalClick()
                            handleBebidaIdClick(bebida.idDrink)
                        }}>
                            Ver receta
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida