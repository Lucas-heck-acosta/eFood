import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Form = styled.form`
  display: block;
  width: 100%;
  color: ${colors.lightOrange};

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
    background-color: ${colors.mediumOrange};
    height: 32px;
    padding: 0 8px;
    border: 1px; solid ${colors.mediumOrange};
    width: 100%;

  }


  ${ButtonContainer} {
    margin-bottom: 8px;

    &:first-child {
      margin-top: 24px;
    }
  }

  .hidden {
    display: none;
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const ChekoutMessage = styled.div`
  color: ${colors.lightOrange};

  h3 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 22px;
  }
`
