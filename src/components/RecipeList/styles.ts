import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
  }
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;

  position: relative;
  z-index: 1;
  background-color: ${colors.orange};
  color: ${colors.white};
  padding: 24px;
  display: flex;

  @media (max-width: ${breakpoints.phone}) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 250px;
  }

  header {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    img {
      height: 20px;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
  }
  p {
    font-size: 14px;
    line-height: 22px;

    @media (max-width: ${breakpoints.phone}) {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
`

export const Media = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
  object-fit: cover;

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`
