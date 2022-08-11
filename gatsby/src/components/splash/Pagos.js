import React from 'react'
import styled from 'styled-components'

const Pagos = () => {
    return(
        <PagosContainer>
            <a rel="noreferrer" target='_blank' href='http://institutofranco.servoescolar.mx/Inicio.aspx'>PAGO EN SESWEB</a>
            <a rel="noreferrer" target='_blank' href='https://dep.knotion.com/login'>PAGO LICENCIA KNOTION</a>
        </PagosContainer>
    )
}

const PagosContainer = styled.section`
margin-top: 50px;
display: flex;
justify-content: center;
    a {
        max-width: 300px;
        display: block;
        background-color: var(--blue);
        color: white;
        border: solid 1px white;
        padding: 10px;
        text-align: center;
        margin-bottom: 10px;
        margin-left: 20px;
    }
`

export default Pagos