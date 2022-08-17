import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        }
    }
    `);


const logoGetDataImage = getImage(data.sanitySettingsPage.logo.asset)
    const logoGetDataImageAlt = data.sanitySettingsPage.logo.alt

    return(
        <HeaderContainer>
            <div className='logo'>
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoGetDataImage}
                        alt={logoGetDataImageAlt}
                    />
                </div>
                
            </div>
            <div className='links'>
                <div className='top'>
                    <a rel="noreferrer" href={`tel:${data.sanitySettingsPage.tel}`}>Tel. {data.sanitySettingsPage.tel}</a>
                    <a rel="noreferrer" href={`mailto:${data.sanitySettingsPage.mail}`}>{data.sanitySettingsPage.mail}</a>
                    <Link className='cta' to={`/${data.sanitySettingsPage.linkAdmisiones.slug.current}`}>Admisiones</Link>
                </div>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: pink;
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    .logo {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .image {
            width: 280px;
        }
    }
    .links {
        width: 50%;
        .top {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            a {
                border: solid 1px var(--blue);
                text-align: center;
                padding: 5px;
            }
            a.cta {
                background-color: #52DE20;
                color: white;
                font-weight: bold;
            }
        }
    }
`

export default Header