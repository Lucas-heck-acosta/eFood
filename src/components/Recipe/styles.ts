import styled from 'styled-components'
import { cores } from '../../styles'

export const Content = styled.div`
  padding: 8px;
`
export const Card = styled.div`
  background-color: ${cores.laranja};
  position: relative;
  max-width: 320px;
  color: ${cores.laranjaClaro};

  img {
    width: 100%;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  display: block;
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
`
export const Botao = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  color: ${cores.laranja};
  font-weight: bold;
  cursor: pointer;
`
