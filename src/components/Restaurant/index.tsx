import { Link } from 'react-router-dom'
import Tag from '../Tag'
import star from '../../assets/images/estrela.svg'
import { Card, Descricao, Titulo, Infos, Line, Content, Media } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
}

const Restaurant = ({
  id,
  title,
  description,
  image,
  infos,
  rating
}: Props) => (
  <Card>
    <Media src={image} alt="" />
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
      <Link to={`/perfil/${id}`}>
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </Content>
  </Card>
)

export default Restaurant
