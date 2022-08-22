import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const PaginasObject = ({data}) => {
    return(
        <PaginasObjectContainer>
            {data.objetos.map(({ _key, linkToPage }) => {
                    const bgGetDataImage = getImage(linkToPage.thumbnail.asset)
                    const bgGetDataImageAlt = linkToPage.thumbnail.alt
                return (
                    <Link
                    to={`/${linkToPage.slug.current}`}
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
                        <h2>{linkToPage.title}</h2>
                        <p>{linkToPage.description}</p>
                    </Link>
                );
            })}
        </PaginasObjectContainer>
    )
}

const PaginasObjectContainer = styled.div`
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
    }
`

export default PaginasObject