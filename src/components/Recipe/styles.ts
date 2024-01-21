import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Content = styled.div`
  padding: 8px;
`
export const Card = styled.div`
  background-color: ${colors.orange};
  position: relative;
  max-width: 320px;
  color: ${colors.lightOrange};

  img {
    width: 100%;
    height: 167px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  height: 175px;
  display: block;
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;

  @media (max-width: ${breakpoints.phone}) {
    height: 220px;
  }
`
