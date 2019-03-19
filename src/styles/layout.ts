import styled from 'styled-components'

export const Layout = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: grid;
  grid-template-areas:
    'content content content content'
    'footer footer footer footer';
`

export const Header = styled.div`
  width: calc(100% - 30px);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: fixed;
  background: white;
`

export const Content = styled.div`
  background: lightgrey;
  grid-area: content;
  /* This margin is to space for the fixed header */
  margin-top: 50px;
  padding-bottom: 200vh;
`

export const Footer = styled.div`
  padding: 15px;
  grid-area: footer;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

export default { Layout, Header, Content, FlexRow }
