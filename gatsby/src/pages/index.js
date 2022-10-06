import React from 'react'
import Hero from '../components/home/Hero'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import { graphql } from "gatsby"
import Header from '../components/layout/header'
import Servicios from '../components/home/Servicios'
import Anuncios from '../components/home/Anuncios'
import Calidad from '../components/home/Calidad'
import SliderHome from '../components/home/SliderHome'
import Footer from '../components/layout/footer'

export const data = graphql`
  query  {
    sanityHomePage {
    #Hero
    heroSection {
      title
      description
      videoEmbed
      imagen {
        alt
        asset {
            url
            gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: BLURRED
            )
        }
      }
    }
    #Servicios
    servicios {
      imagenDeFondo {
        alt
        asset {
          url
        }
      }
      servicios {
        _key
        icono {
          alt
          asset {
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
            )
          }
        }
        nombre
        description
        linkToPage {
          slug {
            current
          }
        }
      }
    }
    #Anuncios
    anuncios {
      titulo
      anuncioPrincipal {
        title
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
        _updatedAt(formatString: "DD, MMM, YYYY")
        description
      }
      anunciosHome {
          _key
          linkToPage {
            _updatedAt(formatString: "DD, MMM, YYYY")
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
      #Calidad
      calidad {
        titulo
        description
        imagenDeFondo {
          asset {
            url
          }
        }
        caracteristicas {
          _key
          linkToPage {
            title
            thumbnail {
              alt
              asset {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  outputPixelDensities: 1.5
                )
              }
            }
            slug {
              current
            }
          }
        }
      }
      #Slider
      sliderHome {
        titulo
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
  }
}
  `



const IndexPage = ({data}) => {
    return(
        <Layout>
            <Seo title={data.sanityHomePage.heroSection.title} description={data.sanityHomePage.heroSection.description} image={data.sanityHomePage.heroSection.imagen.asset.url} />
            <Header />
            <Hero data={data} />
            <Servicios data={data.sanityHomePage.servicios} />
            <Anuncios data={data.sanityHomePage.anuncios} />
            <Calidad data={data.sanityHomePage.calidad} />
            <SliderHome data={data.sanityHomePage.sliderHome} />
            <Footer />
        </Layout>
    )
}

export default IndexPage
