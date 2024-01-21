import styled from 'styled-components'
import { colors } from '../../styles'
import trashcan from '../../assets/images/trashcan.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.lightOrange};
    text-align: center;
  }
`
export const Prices = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.mediumOrange};
  margin-bottom: 16px;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.mediumOrange};
  padding: 8px 0;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-left: 8px;
  }

  h3 {
    color: ${colors.orange};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 24px;
  }
  span {
    display: block;
    color: ${colors.orange};
    font-size: 14px;
  }

  button {
    background-image: url(${trashcan});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 6px;
    right: 6px;
  }
`
