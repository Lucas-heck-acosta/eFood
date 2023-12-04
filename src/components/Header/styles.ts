import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  justify-content: center;
`
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
  justify-content: space-around;
  align-items: center;
  padding: 40px 120px;
  margin: 0;
`

export const Link = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Description = styled.p`
  margin-top: 64px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`
