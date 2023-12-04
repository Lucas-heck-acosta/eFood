import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '6px 8px' : '4px 6px')};
  border-radius: 2px;
  display: inline-block;
`
