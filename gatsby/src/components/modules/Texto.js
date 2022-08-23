import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const Texto = ({data}) => {
    return(
        <TextoContainer>
            <BlockContent
              blocks={data._rawCampoDeTexto}
            />
        </TextoContainer>
    )
}

const TextoContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;
@media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p {
        display: block;
        padding: 10px 0;
    }
`

export default Texto