import React from 'react'
import Header from '../components/layout/header'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

const inicioPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Instituto Franco Mexicano' description='Estamos Trabajando Para Ti' image='/ifm.jpg' />
            <Header />
        </Layout>
    )
}

export default inicioPage
