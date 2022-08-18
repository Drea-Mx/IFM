import React from 'react'
import styled from 'styled-components'
import Count from "./Count";

const Top = () => {
    return(
        <TopContainer>
            <div className='iz'>
                <img src='/logo.png' alt='Logo IFM' />
            </div>
            <div className='contador'>
                <h1>Estamos Trabajando Para Ti</h1>
                <h2>Nueva Página Web En:</h2>
                <Count />
            </div>
        </TopContainer>
    )
}

const TopContainer = styled.section`
background-color: var(--blue);
width: 100%;
display: flex;
@media (max-width: 850px) {
    flex-direction: column;
}
.contador, .iz {
    width: 50%;
    padding: 20px 50px;
    @media (max-width: 850px) {
        width: 100%;
    }
}
.iz {
    img {
        max-width: 450px;
        @media (max-width: 850px) {
            width: 100%;
            max-width: 100%;
        }
    }
}
.contador {
    background-color: white;
    text-align: center;
    h1, h2 {
        font-family: var(--bold);
    }
}
`

export default Top