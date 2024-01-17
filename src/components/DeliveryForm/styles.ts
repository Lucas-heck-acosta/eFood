import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Form = styled.div`
  display: block;
  width: 100%;
  color: ${cores.laranjaClaro};

  label {
    font-size: 14px;
    margin: 8px 0;
    display: block;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
  input {
    background-color: ${cores.laranjaMedio};
    height: 32px;
    padding: 0 8px;
    border: 1px; solid ${cores.laranjaMedio};
    width: 100%;

  }
  div:last-child {
    margin-bottom: 24px;
  }

  ${ButtonContainer} {
    margin-bottom: 8px;
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`
