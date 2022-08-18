import React from 'react'
import Hero from '../components/home/Hero'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import { graphql } from "gatsby"
import Header from '../components/layout/header'
import Servicios from '../components/home/Servicios'
import Anuncios from '../components/home/Anuncios'

export const data = graphql`
  query  {
    sanityHomePage {
    #Hero
    heroSection {
      title
      description
      videoMP4 {
        asset {
          url
        }
      }
      videoWebM {
        asset {
          url
        }
      }
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
        _createdAt(formatString: "DD, MMM, YYYY")
        description
      }
      anunciosHome {
          _key
          linkToPage {
            _createdAt(formatString: "DD, MMM, YYYY")
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
  }
}
  `



const inicioPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Instituto Franco Mexicano' description='Estamos Trabajando Para Ti' image='/ifm.jpg' />
            <Header />
            <Hero data={data} />
            <Servicios data={data.sanityHomePage.servicios} />
            <Anuncios data={data.sanityHomePage.anuncios} />
        </Layout>
    )
}

export default inicioPage
