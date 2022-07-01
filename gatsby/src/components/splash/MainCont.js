import React from 'react'
import styled from 'styled-components'

const MainCont = () => {
    return(
        <MaintContContainer>
            <div className='iz'>
                <div className='container'>
                    <h2>Contacta con nosotros</h2>
                    <div className='line'></div>
                    <form 
                        name="Formulario Contacto" 
                        method="POST" 
                        data-netlify="true"
                        action="/thank-you"
                    >
                        <input type="hidden" name="form-name" value="Formulario Contacto" />
                        <input type='text' name='nombre' placeholder='Nombre de contacto' />
                        <input type='email' name='email' placeholder='Correo' />
                        <input type='tel' name='tel' placeholder='Teléfono' />
                        <label htmlFor="grado" for="grado">Grado de interés:</label>
                        <select id="grado" form="carform">
                            <option value="maternal">Maternal</option>
                            <option value="preescolar1">1° de Preescolar</option>
                            <option value="preescolar2">2° de Preescolar</option>
                            <option value="preescolar3">3° de Preescolar</option>
                            <option value="primaria1">1° de Primaria</option>
                            <option value="primaria2">2° de Primaria</option>
                            <option value="primaria3">3° de Primaria</option>
                            <option value="primaria4">4° de Primaria</option>
                            <option value="primaria5">5° de Primaria</option>
                            <option value="primaria6">6° de Primaria</option>
                        </select>
                        <textarea name='mensaje' placeholder='Mensaje' ></textarea>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
            <div className='de'>
                <div className='cont'>
                    <h2>Contacto</h2>
                    <div className='line'></div>
                    <p>Para informes de inscripción comunícate con nosotros:</p>
                    <div className='info'>
                        <h3><span>Whatsapp: </span><a rel="noreferrer" target='_blank' href='https://wa.me/528115535218/?text=Mensaje desde la página web: me gustaría obtener información'>811 553 5218</a></h3>
                        <h3><span>Teléfono: </span><a href='tel:8183353481'>818 335 3481</a></h3>
                        <h3><span>Mail: </span><a href='mailto:admisiones@ifm.edu.mx'>admisiones@ifm.edu.mx</a></h3>
                    </div>
                    <div className='image'>
                        <img src='/ifm.jpg' alt='Imagen Instituto Franco Mexicano' />
                    </div>
                    <div className='redes'>
                        <a rel="noreferrer" target='_blank' href='https://wa.me/528115535218/?text=Mensaje desde la página web: me gustaría obtener información'>
                            <img src='whats.png' alt='Whatsapp Link' />
                        </a>
                        <a rel="noreferrer" target='_blank' href='http://m.me/instituto.f.mexicano'>
                            <img src='msn.png' alt='Messenger Link' />
                        </a>
                    </div>
                </div>
            </div>
        </MaintContContainer>
    )
}

const MaintContContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 50px;
    .iz {
        grid-column: 1/5;
        @media (max-width: 850px) {
            grid-column: 1/11;
            grid-row: 2/3;
        }
        .container {
            padding: 20px;
            background-color: white;
            text-align: center;
            form {
                text-align: left;
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
            h2 {

            }
            .line {
                height: 1px;
                width: 100%;
                background-color: var(--blue);
                margin-top: 5px;
                margin-bottom: 20px;
            }
        }
    }
    .de {
        grid-column: 6/11;
        color: white;
        @media (max-width: 850px) {
            grid-column: 1/11;
            grid-row: 1/2;
        }
        .cont {
            .line {
                background-color: white;
                height: 1px;
                width: 100%;
                margin-top: 5px;
            }
            p {
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .info {
                margin-bottom: 20px;
                span {
                    font-family: var(--regular);
                }
            }
            .redes {
                display: flex;
                margin-top: 20px;
                justify-content: flex-end;
                margin-bottom: 50px;
                a {
                    margin-left: 10px;
                    img {
                        width: 30px;
                    }
                }
            }
        }
    }
`

export default MainCont