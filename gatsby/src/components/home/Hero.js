import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({data}) => {

    const bgGetDataImage = getImage(data.sanityHomePage.heroSection.imagen.asset)
    const bgGetDataImageAlt = data.sanityHomePage.heroSection.imagen.alt

    return(
        <HeroContainer>
            <div className='iz'>
                <h1>{data.sanityHomePage.heroSection.title}</h1>
                <p>{data.sanityHomePage.heroSection.description}</p>
            </div>
            <div className='de'>
                <div className='video'>
                    {data.videoEmbed}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LYYQksysCOs?autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    padding-top: 90px;
    display: flex;
    @media (max-width: 680px) {
        padding-top: 115px;
        flex-direction: column-reverse;
    }
    .iz {
        width: 50%;
        background-color: var(--blue);
        color: white;
        padding:50px;
        @media (max-width: 680px) {
            padding: 20px;
            width: 100%;
        }
        h1 {
            font-size: 5vw;
            font-weight: bold;
            line-height: 1;
            margin-bottom: 50px;
        }
        p {
            font-size: 1.2rem;
        }
    }
    .de {
        width: 50%;
        @media (max-width: 680px) {
            width: 100%;
        }
        .image {
            display: none;
            @media (max-width: 680px) {
                display: block;
            }
        }
        .video {
            position:relative;
            height:100%;
            overflow:hidden;
            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            iframe {
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                transform: scale(2);
            }
            @media (max-width: 680px) {
                display: none;
            }
        }
    }
`

export default Hero