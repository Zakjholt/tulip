import React from 'react'
import Navbar from 'components/Navbar'
import { Layout, Content, Footer } from 'styles/layout'

const Page: React.FunctionComponent = ({ children }) => (
  <Layout>
    <Navbar />
    <Content>{children}</Content>
    <Footer>This is the footer</Footer>
  </Layout>
)

export default Page
