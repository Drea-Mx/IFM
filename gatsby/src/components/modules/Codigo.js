import React from 'react'
import styled from 'styled-components'
import Parser from 'html-react-parser';

const Codigo = ({data}) => {
    return(
        <CodigoContainer>
            {Parser(data.campoDeCodigo)}
        </CodigoContainer>
    )
}

const CodigoContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;
iframe {
    width: 100%;
}
form {
    width: 50%;
    margin: 0 auto;
    text-align: left;
    @media (max-width: 680px) {
        width: 100%;
        padding: 0;
    }
    input, select, textarea {
        width: 100%;
        margin-bottom: 20px;
        padding: 7px;
        color: var(--blue);
        border: solid 1px var(--blue);
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: var(--blue);
        }
        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--blue);
        }
        &::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--blue);
        }
    }
    textarea {
        height: 150px;
    }
    button {
        color: white;
        background-color: var(--blue);
        padding: 7px;
        display: block;
        width: 100%;
    }
}
@media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export default Codigo