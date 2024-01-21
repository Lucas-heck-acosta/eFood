import * as S from './styles'

type Props = {
  category: string
  title: string
  image: string
}

const Banner = ({ category, title, image }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay">
      <div className="container">
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </div>
    </div>
  </S.Imagem>
)

export default Banner
