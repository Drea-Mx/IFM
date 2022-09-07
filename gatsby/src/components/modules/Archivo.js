import React from 'react'
import styled from 'styled-components'

const Archivo = ({data}) => {
    return(
        <ArchivoContainer>
            <a target='_blank' rel="noreferrer" download href={data.documento.asset.url}>DESCARGAR</a>
        </ArchivoContainer>
    )
}

const ArchivoContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;
width: auto;
margin: 0 auto;
text-align: center;
a {
    display: block;
    padding: 20px;
    color: white;
    background-color: var(--blue);
    width: 200px;
    margin: 20px auto;
}
@media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export default Archivo