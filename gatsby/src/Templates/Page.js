import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Modules from '../components/modules/Modules'


export default function SingleTagPage({ data: {pages}}) {


    const bgDataImage = getImage(pages.thumbnail.asset)
    const altDataImage = pages.thumbnail.alt

    
    return (
        <Layout>
            <Header />
            <HeroPageContainer>
                <div className='container'>
                    <div className='image'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgDataImage}
                            alt={altDataImage}
                        />
                    </div>
                    <div className='info'>
                        <h1>{pages.title}</h1>
                        <p>{pages.description}</p>
                    </div>
                </div>
            </HeroPageContainer>
            <BodyContainer className='body'>
                <div className='date'>
                    <p>{pages._createdAt}</p>
                    <div className='line'></div>
                </div>
                <Modules moduleArray={pages.moduleArray} />
            </BodyContainer>
            <Footer />

        </Layout>
    )
}

const HeroPageContainer = styled.section`
padding-top: 90px;
@media (max-width: 680px) {
    padding-top: 115px;
}
.container {
    position: relative;
    z-index: 1;
    height: 70vh;
    .image {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow-y: hidden;
    }
    .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 55, 100, 0.8);
        color: white;
        text-align: center;
        width: 80%;
        padding: 50px;
        @media (max-width: 680px) {
                padding: 25px;
                width: 90%;
            }
        h1 {
            font-size: 4vw;
            margin-bottom: 30px;
            @media (max-width: 680px) {
                font-size: 2.5rem;
                margin-bottom: 20px;
            }
        }
        p {
            font-size: 1.5rem;
            @media (max-width: 680px) {
                font-size: 1rem;
            }
        }
    }
}

`

const BodyContainer = styled.section`
width: 80%;
margin: 50px auto;
@media (max-width: 680px) {
    width: 100%;
    margin: 20px auto;
    padding: 20px;
}
    .date {
        display: flex;
        p {
            width: 170px;
        }
        .line {
            transform: translateY(10px);
            height: 1px;
            width: 100%;
            background-color: var(--blue);
        }
    }
`



export const query = graphql`
    query($slug: String!){
        pages: sanityPaginas(slug: { current: {eq: $slug} }){
            title
            slug {
                current
            }
            _createdAt(formatString: "DD, MMM, YYYY")
            description
            thumbnail {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: BLURRED
                    )
                }
            }
            moduleArray {
                ... on SanityCodigo {
                    _key
                    _type
                    campoDeCodigo
                }
                ... on SanityGaleria {
                    _key
                    _type
                    objetos {
                    titulo
                    description
                    _key
                    imagen {
                        alt
                        asset {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            outputPixelDensities: 1.5
                            placeholder: BLURRED
                        )
                        }
                    }
                    }
                }
                ... on SanityImageType {
                    _key
                    _type
                    alt
                    asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                    )
                    }
                }
                ... on SanityImagenTexto {
                    _key
                    _type
                    imagen {
                    alt
                    asset {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                        )
                    }
                    }
                    _rawTexto
                }
                ... on SanityPaginasObject {
                    _key
                    _type
                    objetos {
                        _key
                    linkToPage {
                        title
                        description
                        slug {
                        current
                        }
                        thumbnail {
                        alt
                        asset {
                            gatsbyImageData(
                            layout: FULL_WIDTH
                            outputPixelDensities: 1.5
                            placeholder: BLURRED
                            )
                        }
                        }
                    }
                    }
                }
                ... on SanitySliderObject {
                    _key
                    _type
                    slider {
                    _key
                    alt
                    asset {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                        )
                    }
                    }
                }
                ... on SanityTexto {
                    _key
                    _type
                    _rawCampoDeTexto
                }
            }
        }
        
    }
`