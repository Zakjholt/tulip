import styled from 'styled-components'

const Layout = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: grid;
  grid-template-areas:
    'header header header header'
    'sidebar content content content';
`

const Header = styled.div`
  background: lightpink;
  color: white;
  grid-area: header;
  font-size: 1.5em;
  width: 100%;
`

const Content = styled.div`
  background: lightgrey;
  grid-area: content;
`

const Sidebar = styled.div`
  background: whitesmoke;
  grid-area: sidebar;
  font-size: 1.2em;
`

export default { Layout, Header, Content, Sidebar }
