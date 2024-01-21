import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${colors.mediumOrange};
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 124px;
`

export const SocialMedias = styled.ul`
  margin-top: 30px;
  margin-bottom: 90px;
  display: flex;
`

export const SocialMedia = styled.li`
  margin-right: 8px;
  cursor: pointer;
`

export const Paragraph = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
`
