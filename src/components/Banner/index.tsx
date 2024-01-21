import Loader from '../Loader'
import * as S from './styles'

type Props = {
  category: string
  title: string
  image: string
  isLoading: boolean
}

const Banner = ({ category, title, image, isLoading }: Props) => {
  if (isLoading) return <Loader />

  return (
    <S.Imagem style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <div className="container">
          <S.Category>{category}</S.Category>
          <S.Title>{title}</S.Title>
        </div>
      </div>
    </S.Imagem>
  )
}

export default Banner
