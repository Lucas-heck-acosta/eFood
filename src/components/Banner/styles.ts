import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: flex-end; /* Align content to the bottom of the container */
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  color: ${cores.branca};

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;/
    color: ${cores.branca}
  }

  .container {
    text-align:
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 32px;
  margin-top: 180px;
`
export const Category = styled.h3`
  font-weight: 100;
  font-size: 32px;
`
