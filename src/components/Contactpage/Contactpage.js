import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Reach</h2>
        <p className='contactpara'>Mail:madhankumarmahi@gmail.com<br></br>Phone:8098222536</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+918156811884");
          }}
        >Ping me</button>
        
      </Container>
    </div>
  )
}

export default Contactpage