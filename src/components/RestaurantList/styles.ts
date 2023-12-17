import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  align-items: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
  }
`
