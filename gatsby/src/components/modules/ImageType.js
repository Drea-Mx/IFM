import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageType = ({data}) => {
    const bgGetDataImage = getImage(data.asset)
    const bgGetDataImageAlt = data.alt
    return(
        <ImageModuleContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
        </ImageModuleContainer>
    )
}

const ImageModuleContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;
@media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export default ImageType