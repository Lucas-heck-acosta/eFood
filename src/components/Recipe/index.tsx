import { Card, Descricao, Titulo, Botao, Content } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Recipe = ({ title, description, image, onClick }: Props) => (
  <Card>
    <Content onClick={onClick}>
      <img src={image} alt="Pizza" />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Content>
  </Card>
)

export default Recipe
