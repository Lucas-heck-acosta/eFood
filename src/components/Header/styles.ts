import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  a {
    color: ${cores.laranja};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 120px;
  margin: 0;
`

export const LinkItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Description = styled.p`
  margin-top: 64px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`

export const DesktopHeader = styled.header`
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const MobileHeader = styled.header`
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  ${Links} {
    justify-content: space-between;
    padding: 20px 10%;
  }

  span {
    display: flex;
    align-items: center;
  }
`
