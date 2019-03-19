import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Anchor = styled.span`
  text-decoration: none;
  color: lightcoral;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`

export const Brand = styled.div`
  color: lightcoral;
  font-size: 1.2em;
`
