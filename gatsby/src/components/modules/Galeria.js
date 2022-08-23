import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Galeria = ({data}) => {
    return(
        <GaleriaContainer>
            {data.objetos.map(({ _key, titulo, description, imagen}) => {
                    const bgGetDataImage = getImage(imagen.asset)
                    const bgGetDataImageAlt = imagen.alt
                return (
                    <div
                        key={_key}
                        className='objeto'
                    >
                        <div className='image'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={bgGetDataImage}
                                alt={bgGetDataImageAlt}
                            />
                        </div>
                        <h2>{titulo}</h2>
                        <p>{description}</p>
                    </div>
                );
            })}
        </GaleriaContainer> 
    )
}

const GaleriaContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .objeto {
        h2 {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        p {
                word-break: break-word;
            }
        .image {
            width: 100%;
            img {
                width: 100%;
                height: auto;
            }
            
        }
    }
`

export default Galeria