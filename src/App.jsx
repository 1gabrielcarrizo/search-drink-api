import React from 'react'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <>
    <header className='py-5'>
      <h1>Buscador de bebidas</h1>
    </header>
      <Container className='mt-5'>
        <Formulario/>
      </Container>
    </>
  )
}

export default App