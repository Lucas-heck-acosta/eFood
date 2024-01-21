import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Content = styled.div`
  padding: 0 6px 6px;
`
export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  max-width: 472px;
  border: 1px solid ${colors.orange};

  ${TagContainer} {
    margin-right: 8px;
  }
  img {
    width: 100%;
  }
`
export const Media = styled.img`
  height: 217px;
  object-fit: cover;
`

export const Line = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 3px;
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
  display: block;
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
  min-height: 110px;
`
export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 6px;
`
