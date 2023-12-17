import Button from '../Button'
import { Card, Descricao, Titulo, Content } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Recipe = ({ title, description, image, onClick }: Props) => {
  return (
    <Card>
      <Content onClick={onClick}>
        <img src={image} alt="Pizza" />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button title="Clique para adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </Content>
    </Card>
  )
}

export default Recipe
