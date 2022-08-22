import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby";
import Parser from 'html-react-parser';

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            mail
            tel
            direccion
            mapaCodigo
            redesSociales {
                _key
                icono {
                    alt
                    asset {
                        url
                    }
                }
                link
            }
            iconoFooter {
            alt
            asset {
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: BLURRED
                )
            }
            }
            sesweb {
                texto
                link
            }
            licenciaKnotion {
                link
                texto
            }
            derechos
            terminios {
                texto
                pagina {
                    slug {
                    current
                    }
                }
            }
            politicas {
                texto
                pagina {
                    slug {
                        current
                    }
                }
            }
        }
    }
    `);


    const logoGetDataImage = getImage(data.sanitySettingsPage.iconoFooter.asset)
    const logoGetDataImageAlt = data.sanitySettingsPage.iconoFooter.alt

    return(
        <FooterContainer>
            <div className='footer'>
                <div className='datos'>
                    <div className='info'>
                        <div className='logo'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={logoGetDataImage}
                                alt={logoGetDataImageAlt}
                            />
                        </div>
                        <div className='data'>
                            <a rel="noreferrer" href={`tel:${data.sanitySettingsPage.tel}`}><span>Tel:</span> {data.sanitySettingsPage.tel}</a>
                            <a rel="noreferrer" href={`mailto:${data.sanitySettingsPage.mail}`}><span>Mail:</span> {data.sanitySettingsPage.mail}</a>
                            <p>{data.sanitySettingsPage.direccion}</p>
                        </div>
                    </div>
                    <div className='redes'>
                        {data.sanitySettingsPage.redesSociales.map(({ _key, icono, link }) => {
                                return (
                                    <a href={link} rel="noreferrer" key={_key} target='_blank'>
                                        <img src={icono.asset.url} alt={icono.alt} />
                                    </a>
                                );
                        })}
                    </div>
                </div>
                <div className='mapa'>
                    {Parser(data.sanitySettingsPage.mapaCodigo)}
                </div>
            </div>
            <div className='knotion'>
                <a rel="noreferrer" href={data.sanitySettingsPage.sesweb.link}>{data.sanitySettingsPage.sesweb.texto}</a>
                <a rel="noreferrer" href={data.sanitySettingsPage.licenciaKnotion.link}>{data.sanitySettingsPage.licenciaKnotion.texto}</a>
            </div>
            <div className='otros'>
                <div className='iz'>
                        <p>{data.sanitySettingsPage.derechos}</p>
                </div>  
                <div className='de'>
                        <Link to={`/${data.sanitySettingsPage.terminios.pagina.slug.current}`}>{data.sanitySettingsPage.terminios.texto}</Link>
                        <Link to={`/${data.sanitySettingsPage.politicas.pagina.slug.current}`}>{data.sanitySettingsPage.politicas.texto}</Link>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    .footer {
        padding: 0 0 0 50px;
        display: flex;
        @media (max-width: 680px) {
            flex-direction: column;
            padding: 0;
        }
        .datos {
            width: 50%;
            padding-top: 50px;
            padding-bottom: 20px;
            padding-right: 50px;
            @media (max-width: 680px) {
                padding: 20px;
                width: 100%;
            }
            .info {
                display: flex;
                padding-bottom: 20px;
                border-bottom: solid 1px var(--blue);
                .logo {
                    width: 20%;
                    padding-right: 20px;
                }
                .data {
                    width: 80%;
                    border-left: solid 1px var(--blue);
                    padding-left: 20px;

                    a {
                        display: block;
                        margin-bottom: 10px;
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .redes {
            display: flex;
            margin-top: 20px;
            justify-content: center;
            a {
                padding: 0 10px;
            }
        }
        .mapa {
            width: 50%;
            @media (max-width: 680px) {
                width: 100%;
            }
            iframe {
                width: 100%;
                height: 100%;
                @media (max-width: 680px) {
                    height: 200px;
                }
            }
        }
    }
    .knotion {
        background-color: var(--blue);
        color: white;
        display: flex;
        justify-content: center;
        @media (max-width: 680px) {
            flex-direction: column;
            text-align: center;
        }
        a {
            padding: 15px 20px;
            @media (max-width: 680px) {
                display: block;
                border-bottom: solid 1px white;
                padding: 30px;
                font-weight: bold;
                letter-spacing: 1.5px;
            }
        }
    }
    .otros {
        padding: 10px 50px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 680px) {
            flex-direction: column-reverse;
            text-align: center;
            padding-bottom: 100px;
        }
        .de {
            @media (max-width: 680px) {
                margin-bottom: 50px;
                margin-top: 50px;
            }
            a {
                padding-left: 50px;
            }
        }
    }
`

export default Footer