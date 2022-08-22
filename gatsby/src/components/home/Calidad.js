import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Calidad = ({data}) => {
    return(
        <CalidadContainer style={{backgroundImage: `url(${data.imagenDeFondo.asset.url})`}}>
            <div className='cont'>
                <div className='top'>
                    <h2>{data.titulo}</h2>
                    <p className='desc'>{data.description}</p>
                </div>
                <div className='caracteristicas'>
                    {data.caracteristicas.map(({ _key, linkToPage }) => {
                            const iconGetDataImage = getImage(linkToPage.thumbnail.asset)
                            const iconGetDataImageAlt = linkToPage.thumbnail.alt
                            return (
                                <Link to={`/${linkToPage.slug.current}`} key={_key} className='caracteristica' >
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={iconGetDataImage}
                                            alt={iconGetDataImageAlt}
                                        />
                                    </div>
                                    <div className='title'>
                                        <h3>{linkToPage.title}</h3>
                                    </div>
                                
                                </Link>
                            );
                    })}
                </div>
            </div>
        </CalidadContainer>
    )
}

const CalidadContainer = styled.section`
    padding: 100px 20px;
    position: relative;
    background-position: center;
    background-size: cover;
    .cont {
        width: 80%;
        margin: 0 auto;
        @media (max-width: 680px) {
            width: 100%;
        }
    }
    @media (max-width: 680px) {
        width: 100%;
        padding: 50px 20px;
    }
    h2 {
        border-bottom: solid 1px var(--blue);
    }
    p {
        margin-top: 10px;
        font-weight: bold;
    }
    .caracteristicas {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 680px) {
            flex-direction: column;
        }
        .caracteristica {
            width: 100%;
            padding: 20px;
            transition: transform 250ms ease;
            &:hover {
                transform: scale(1.05);
            }
            .image {
                margin: 0 auto;
                width: 15vw;
                height: 15vw;
                border-radius: 50%;
                overflow: hidden;
                @media (max-width: 680px) {
                    width: 200px;
                    height: 200px;
                }
            }
            .title {
                margin-top: 50px;
                border: solid 1px var(--blue);
                text-align: center;
                padding: 10px;
                background-color: white;
            }
        }
    }
`

export default Calidad