import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SliderObject = ({data}) => {

    const settings = {
        centerPadding: "0",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        waitForAnimate: true,
        speed: 500,
      };


    return(
        <SliderObjectContainer>
            <SliderContainer  {...settings}>
                {data.slider.map(({ _key, alt, asset }) => {
                        const bgGetDataImage = getImage(asset)
                        const bgGetDataImageAlt = alt
                    return (
                        <Slide
                            key={_key}
                            className='slide'
                        >
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={bgGetDataImage}
                                alt={bgGetDataImageAlt}
                            />
                        </Slide>
                    );
                })}
            </SliderContainer>
        </SliderObjectContainer>
    )
}

const SliderObjectContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;
    @media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

const SliderContainer = styled(Slider)`
width: 70%;
margin: 0 auto;
position: relative;
margin-top: 50px;
@media (max-width: 680px) {
    width: 80%;
    margin-top: 20px;
}
.slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  img {
    width: 20px;
    @media (max-width: 680px) {
        width: 15px;
    }
  }
}
.slick-prev {
  left: -100px;
  &:before, &:after {
    color: var(--blue);
  }
  @media (max-width: 680px) {
      left: -40px;
  }
}

.slick-next {
  right: -100px;
  &:before, &:after {
    color: var(--blue);
  }
  @media (max-width: 680px) {
    right: -40px;
  }


}
.slick-dots {
  bottom: -50px;
    li {
      button {
        &:before {
          color: var(--blue) !important;
          font-size: 15px;
        }
      }
       
    } 
    
    
  }

`
const Slide = styled.div`
position: relative;
`

export default SliderObject