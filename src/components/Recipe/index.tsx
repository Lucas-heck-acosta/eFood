import Button from '../Button'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Recipe = ({ title, description, image, onClick }: Props) => {
  return (
    <S.Card>
      <S.Content onClick={onClick}>
        <img src={image} alt="Pizza" />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Button title="Clique para adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </S.Content>
    </S.Card>
  )
}

export default Recipe
