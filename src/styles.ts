import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  tablet: '1023px',
  phone: '580px'
}

export const colors = {
  white: '#FFFFFF',
  orange: '#E66767',
  lightOrange: '#FFF8F2',
  mediumOrange: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
 }

 body {
  background-color: ${colors.lightOrange};
  color: ${colors.orange};
 }
.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width:${breakpoints.tablet}) {
    max-width: 80%;
  }
}
 `
