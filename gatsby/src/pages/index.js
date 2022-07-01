import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import MainCont from '../components/splash/MainCont'
import Pagos from '../components/splash/Pagos'
import Top from '../components/splash/Top'

const IndexPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Instituto Franco Mexicano' description='Estamos Trabajando Para Ti' image='/ifm.jpg' />
            <Top />
            <Pagos />
            <MainCont />
        </Layout>
    )
}

export default IndexPage
