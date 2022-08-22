import React from 'react'
import styled from 'styled-components'
import Parser from 'html-react-parser';

const Codigo = ({data}) => {
    return(
        <CodigoContainer>
            {Parser(data.campoDeCodigo)}
        </CodigoContainer>
    )
}

const CodigoContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;
iframe {
    width: 100%;
}
@media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export default Codigo