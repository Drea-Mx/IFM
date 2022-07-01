import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Top from '../components/splash/Top'

const IndexPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Instituto Franco Mexicano' description='Estamos Trabajando Para Ti' image='/ifm.jpg' />
            <Top />
            <ProxCont>
                <h2>Próximamente</h2>
            </ProxCont>
        </Layout>
    )
}

const ProxCont = styled.section`
    position: fixed;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    h2 {
        text-align: center;
        color: white;
    }
`

export default IndexPage
