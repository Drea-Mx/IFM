import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby";

const LinksHeader = ({links, titulo, linkPrincipal}) => {
    return (
        <LinkContainer>
            <Link className='link' to={`/${linkPrincipal.slug.current}`}>{titulo}</Link>
            <ul className='paginas'>
            {links.map(({ _key, pagina }) => {
                    return (
                        <li className='pagina' key={_key}>
                            <Link to={`/${pagina.slug.current}`}>{pagina.title}</Link>
                        </li>
                    );
            })}
            </ul>
        </LinkContainer>
    )
}

const LinkContainer = styled.li`
    border: solid 1px white;
    border-top: none;
    flex: 1 1 auto;
    position: relative;
    background-color: var(--blue);
    color: white;
    &:hover {
        border-left: solid 1px var(--blue);
        border-bottom: solid 1px var(--blue);
        background-color: white;
        color: var(--blue);
        ul.paginas {
            display: block;
        }
    }
    a.link {
        padding: 20px 0;
        display: block;
        text-align: center;
        @media (max-width: 680px) {
            padding: 10px;
        }
    }
                    
                
ul.paginas {
    position: absolute;
    top: 59px;
    width: 100%;
    display: none;
    @media (max-width: 680px) {
        top: 35px
    }
    li {
        display: block;
        a {
            border: solid 1px var(--blue);
            display: block;
            width: 100%;
            padding: 10px 5px;
            text-align: left;
            background-color: white;
            color: var(--blue);
            &:hover {
                color: white;
                background-color: var(--blue);
            }
        }
    }
}
`

export default LinksHeader