import Tag from '../Tag'
import star from '../../assets/images/estrela.svg'
import { Card, Descricao, Titulo, Infos, Line, Content } from './styles'

type Props = {
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
}

const Restaurant = ({ title, description, image, infos, rating }: Props) => (
  <Card>
    <img src={image} alt="" />
    <Content>
      <Line>
        <Titulo>{title}</Titulo>
        <Line>
          <Titulo>{rating}</Titulo>
          <img src={star} alt="star" />
        </Line>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
      </Line>
      <Descricao>{description}</Descricao>
      <a href="#">
        <Tag size="big">Saiba mais</Tag>
      </a>
    </Content>
  </Card>
)

export default Restaurant
