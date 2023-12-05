import React from 'react'
import { Imagem, Title, Category } from './styles'

type Props = {
  category: string
  title: string
  image: string
}

const Banner = ({ category, title, image }: Props) => (
  <Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay">
      <div className="container">
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
    </div>
  </Imagem>
)

export default Banner
