import React from 'react'

import Page from 'components/Page'

const Home: React.FunctionComponent = () => (
  <Page.Layout>
    <Page.Header>I am the header</Page.Header>
    <Page.Sidebar>I am the sidebar</Page.Sidebar>

    <Page.Content>I am the content</Page.Content>
  </Page.Layout>
)

export default Home
