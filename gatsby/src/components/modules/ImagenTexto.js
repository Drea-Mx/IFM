import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const ImagenTexto = ({data}) => {
    const bgGetDataImage = getImage(data.imagen.asset)
    const bgGetDataImageAlt = data.imagen.alt
    return(
        <ImagenTextoContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
            <div className='texto'>
                <BlockContent
                    blocks={data._rawTexto}
                />
            </div>
        </ImagenTextoContainer>
    )
}

const ImagenTextoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
margin-bottom: 50px;
@media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
        flex-direction: column;
    }
    .image {
        width: 30%;
        @media (max-width: 850px) {
            width: 50%;
        }
    }
    .texto {
        width: 70%;
        padding: 50px;
        vertical-align: middle;
        @media (max-width: 850px) {
            padding: 20px 0;
            width: 100%;
            text-align: center;
        }
    }
`

export default ImagenTexto