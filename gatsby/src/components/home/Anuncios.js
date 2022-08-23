import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Anuncios = ({data}) => {
    const imagenPGetDataImage = getImage(data.anuncioPrincipal.thumbnail.asset)
    const imagenPGetDataImageAlt = data.anuncioPrincipal.thumbnail.alt

    var strFirstThree = data.anuncioPrincipal.description.substring(0,130);
    return(
        <AnunciosContainer>
            <div className='iz'>
                <Link className='anuncioPrincipal' to={`/${data.anuncioPrincipal.slug.current}`}>
                    <div className='image'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={imagenPGetDataImage}
                            alt={imagenPGetDataImageAlt}
                        />
                    </div>
                    <div className='texto'>
                        <p className='date'>{data.anuncioPrincipal._createdAt}</p>
                        <h2 className='titulo'>{data.anuncioPrincipal.title}</h2>
                        <p className='desc'>{strFirstThree}...</p>
                    </div>
                </Link>
            </div>
            <div className='de'>
                <h2>{data.titulo}</h2>
                <div className='anuncios'>
                    {data.anunciosHome.map(({ _key, linkToPage }) => {
                            const imageGetDataImage = getImage(linkToPage.thumbnail.asset)
                            const imageGetDataImageAlt = linkToPage.thumbnail.alt

                            var strFirst = linkToPage.description.substring(0,50);
                            return (
                                <Link to={`/${linkToPage.slug.current}`} key={_key} className='anuncio' >
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={imageGetDataImage}
                                            alt={imageGetDataImageAlt}
                                        />
                                    </div>
                                    <div className='texto'>
                                        <div className='top'>
                                            <p className='date'>{linkToPage._createdAt}</p>
                                            <h3 className='titulo'>{linkToPage.title}</h3>
                                            <p className='desc'>{strFirst}...</p>
                                        </div>
                                        <div className='bot'>
                                            <p>Leer más</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                    })}
                </div>
            </div>
        </AnunciosContainer>
    )
}

const AnunciosContainer = styled.section`
display: flex;
background-color: var(--blue);
color: white;
padding: 50px;
@media (max-width: 680px) {
    flex-direction: column;
    padding: 20px;
}
    .iz {
        width: 50%;
        @media (max-width: 680px) {
            width: 100%;
        }
        .anuncioPrincipal {
            position: relative;
            @media (max-width: 680px) {
                width: 100%;
            }
            .texto {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 20px;
                background-color: rgba(0, 55, 100, 0.5);
                color: white;
                border: solid 1px var(--blue);
                border-top: none;
                transition: all 350ms ease;
                width: 100%;
                @media (max-width: 680px) {
                    position: static;
                    padding: 20px 0 0;
                }
                .date {
                    border-bottom: solid 1px white;
                    padding-bottom: 5px;
                    font-size: 0.8rem;
                    width: 100%;
                }
                .titulo {
                    margin-top: 5px;
                    padding-bottom: 5px;
                    border-bottom: solid 1px white;
                    @media (max-width: 680px) {
                        width: 100%;
                    }
                }
                .desc {
                    padding-top: 5px;
                    @media (max-width: 680px) {
                        width: 100%;
                    }
                }
            }
            &:hover {
                .texto {
                    background-color: rgba(0, 55, 100, 0.9);
                }
            }
        }
    }
    .de {
        width: 50%;
        padding: 0 20px 50px;
        @media (max-width: 680px) {
            width: 100%;
            padding: 0px;
            margin-top: 30px;
        }
        h2 {
            font-size: 2rem;
            border-bottom: solid 1px white;
        }
        .anuncios {
            margin-top: 20px;
            height: 40vw;
            overflow-y: scroll;
            @media (max-width: 680px) {
                height: 300px;
            }
            .anuncio {
                display: flex;
                margin-bottom: 10px;
                .image {
                    width: 30%;
                    @media (max-width: 1000px) {
                        width: 50%;
                    }
                    @media (max-width: 680px) {
                        width: 20%;
                    }
                }
                .texto {
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    @media (max-width: 1000px) {
                        width: 50%;
                    }
                    @media (max-width: 680px) {
                        width: 80%;
                    }
                    .date {
                        font-size: 0.8rem;
                        border-bottom: solid 1px white;
                        padding-bottom: 5px;
                    }
                    h3 {
                        margin-top: 5px;
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
`

export default Anuncios