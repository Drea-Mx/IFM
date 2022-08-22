import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Servicios = ({data}) => {
    return(
        <ServiciosContainer style={{backgroundImage: `url(${data.imagenDeFondo.asset.url})`}}>
            <div className='servicios'>
                {data.servicios.map(({ _key, icono, nombre, description, linkToPage }) => {
                        const iconGetDataImage = getImage(icono.asset)
                        const iconGetDataImageAlt = icono.alt
                        return (
                            <Link to={`/${linkToPage.slug.current}`} key={_key} className='servicio' >
                                <div className='icono'>
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={iconGetDataImage}
                                            alt={iconGetDataImageAlt}
                                        />
                                    </div>
                                </div>
                                <div className='titulo'>
                                    <h2>{nombre}</h2>
                                </div>
                                <div className='description'>
                                    <p>{description}</p>
                                </div>
                                <div className='link'>
                                    <img src='/arrow.png' alt='Link a página IFM' />
                                </div>
                            </Link>
                        );
                })}
            </div>

        </ServiciosContainer>
    )
}

const ServiciosContainer = styled.section`
position: relative;
background-position: center;
background-size: cover;
.servicios {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 100px 20px;
    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 680px) {
        flex-direction: column;
    }
    .servicio {
        background-color: white;
        border: solid 1px var(--blue);
        margin-right: 20px;
        margin-left: 20px;
        transition: transform 250ms ease-in-out;
        @media (max-width: 680px) {
            margin-right: 0;
            margin-left: 0;
            margin-bottom: 20px;
        }
        .icono {
            width: 100%;
            .image {
                width: 20%;
                padding-top: 20px;
                padding-bottom: 20px;
                margin: 0 auto;
            }
        }
        .titulo {
            background-color: var(--blue);
            padding: 20px 10px;
            h2 {
                color: white;
                text-align: center;
                @media (max-width: 680px) {
                    font-size: 1.5rem;
                }
            }
        }
        .description {
            padding: 20px;
            margin-top: 20px;
            text-align: center;
            p {
                @media (max-width: 680px) {
                    font-size: 1.2rem;
                }
            }
        }
        .link {
            margin-top: 20px;
            padding-bottom: 20px;
            display: block;
            text-align: center;
            img {
                width: 40px;
                margin: 0 auto;
            }
        }
        &:hover {
            transform: scale(1.05);
            @media (max-width: 680px) {
                transform: none;
            }
        }
    }
}
`

export default Servicios