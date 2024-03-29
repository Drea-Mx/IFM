import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LinksHeader from './linksHeader';

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            mail
            tel
            linkAdmisiones {
                slug {
                    current
                }
            }
            logo {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: BLURRED
                    )
                }
            }
            menu {
                categoria {
                    _key
                    titulo
                    linkPrincipal {
                        title
                        slug {
                            current
                        }
                    }
                    links {
                        _key
                        pagina {
                            title
                            slug {
                                current
                            }
                        }
                    }
                }
            }
        }
    }
    `);


const logoGetDataImage = getImage(data.sanitySettingsPage.logo.asset)
    const logoGetDataImageAlt = data.sanitySettingsPage.logo.alt

    return(
        <HeaderContainer>
            <div className='logo'>
                <div className='image'>
                    <Link to='/'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={logoGetDataImage}
                            alt={logoGetDataImageAlt}
                        />
                    </Link>
                    
                </div>
                
            </div>
            <div className='links'>
                <div className='top'>
                    <a rel="noreferrer" href={`tel:${data.sanitySettingsPage.tel}`}>Tel. {data.sanitySettingsPage.tel}</a>
                    <a rel="noreferrer" href={`mailto:${data.sanitySettingsPage.mail}`}>{data.sanitySettingsPage.mail}</a>
                    <Link className='cta' to={`/${data.sanitySettingsPage.linkAdmisiones.slug.current}`}>Admisiones</Link>
                </div>
                <nav className='menu'>
                    <ul className='categorias'>
                        <li className='categoria'>
                            <Link to='/'>Inicio</Link>
                        </li>
                    {data.sanitySettingsPage.menu.categoria.map(({ _key, titulo, links, linkPrincipal }) => {
                            return (
                                <LinksHeader className='categoria' key={_key} titulo={titulo} links={links} linkPrincipal={linkPrincipal} />
                            );
                    })}
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: white;
    position: fixed;
    width: 100%;
    height: 91px;
    display: flex;
    z-index: 2;
    border-bottom: solid 1px var(--blue);
    @media (max-width: 680px) {
        flex-direction: column;
    }
    .logo {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        @media (max-width: 1000px) {
            width: 30%;
        }
        @media (max-width: 680px) {
            padding: 10px;
            width: 100%;
        }
        .image {
            width: 380px;
            @media (max-width: 1000px) {
                width: 80%;
            }
            @media (max-width: 680px) {
                width: 200px;
            }
        }
    }
    .links {
        width: 50%;
        @media (max-width: 1000px) {
            width: 70%;
        }
        @media (max-width: 680px) {
            width: 100%;
        }
        .top {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            @media (max-width: 680px) {
                grid-template-columns: 1fr 1fr;
            }
            a {
                border: solid 1px var(--blue);
                text-align: center;
                padding: 5px;
                background-color: white;
            }
            a.cta {
                background-color: #F5B840;
                color: white;
                font-weight: bold;
                @media (max-width: 680px) {
                    grid-column: 1 / span 2;
                }
            }
        }
        nav {
            width: 100%;
            ul.categorias {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                li.categoria {
                    border: solid 1px var(--blue);
                    border-bottom: none;
                    border-top: none;
                    flex: 1 1 auto;
                    position: relative;
                    color: white;
                    &:first-child {
                        background-color: #68B2E0;
                        border-left: solid 1px var(--blue);
                    }
                    &:nth-child(2) {
                        background-color: #F4B840;
                        .paginas {
                            background-color: #F4B840;
                            .pagina {
                                background-color: #F4B840;
                            }
                        }
                    }
                    &:nth-child(3) {
                        background-color: #2457B1;
                        .paginas {
                            background-color: #2457B1;
                            .pagina {
                                background-color: #2457B1;
                            }
                        }
                    }
                    &:nth-child(4) {
                        background-color: #939598;
                        .paginas {
                            background-color: #939598;
                            .pagina {
                                background-color: #939598;
                            }
                        }
                    }
                    &:nth-child(5) {
                        background-color: var(--blue);
                        .paginas {
                            background-color: var(--blue);
                            .pagina {
                                background-color: var(--blue);
                                border-top: solid 1px white;
                            }
                        }
                    }
                    &:hover {
                        border-left: solid 1px var(--blue);
                        border-bottom: solid 1px var(--blue);
                        color: white;
                        background-color: var(--blue);
                    }
                    a {
                        padding: 20px 0;
                        display: block;
                        text-align: center;
                        @media (max-width: 680px) {
                            padding: 10px;
                        }
                    }
                    
                }
            }
        }
    }
`

export default Header