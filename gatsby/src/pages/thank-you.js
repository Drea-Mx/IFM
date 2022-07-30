import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import MainContThank from '../components/splash/MainContThank'
import Pagos from '../components/splash/Pagos'
import Top from '../components/splash/Top'

const ThankyouPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Instituto Franco Mexicano' description='Estamos Trabajando Para Ti' image='/ifm.jpg' />
            <Top />
            <Pagos />
            <MainContThank />
        </Layout>
    )
}

export default ThankyouPage
