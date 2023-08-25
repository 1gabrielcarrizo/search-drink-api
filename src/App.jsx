import React from 'react'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import Footer from './components/Footer'

const App = () => {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <div className='contenedor'>
        <header className='py-5'>
          <h1>Buscador de bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
        <Footer />
        </div>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App