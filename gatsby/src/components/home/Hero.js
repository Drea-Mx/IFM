import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({data}) => {

    const mp4 = data.sanityHomePage.heroSection.videoMP4.asset.url
    const webm = data.sanityHomePage.heroSection.videoWebM.asset.url

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
                    <video muted loop autoPlay poster={data.sanityHomePage.heroSection.imagen.asset.url}>
                        <source src={webm} type="video/webm" />
                        <source src={mp4} type="video/mp4" />
                    </video>
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
            height: 100%;
            line-height: 0;
            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            @media (max-width: 680px) {
                display: none;
            }
        }
    }
`

export default Hero