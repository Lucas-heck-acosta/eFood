import { Link } from 'react-router-dom'
import Tag from '../Tag'
import star from '../../assets/images/estrela.svg'
import { Card, Descricao, Titulo, Infos, Line, Content } from './styles'

type Props = {
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
  link: string
}

const Restaurant = ({
  title,
  description,
  image,
  infos,
  rating,
  link
}: Props) => (
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
      <Link to={link}>
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </Content>
  </Card>
)

export default Restaurant
