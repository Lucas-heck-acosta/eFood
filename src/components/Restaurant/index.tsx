import { Link } from 'react-router-dom'

import Tag from '../Tag'
import * as S from './styles'
import star from '../../assets/images/estrela.svg'

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
  <S.Card>
    <S.Media src={image} alt="" />
    <S.Content>
      <S.Line>
        <S.Title>{title}</S.Title>
        <S.Line>
          <S.Title>{rating}</S.Title>
          <img src={star} alt="star" />
        </S.Line>
        <S.Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.Infos>
      </S.Line>
      <S.Description>{description}</S.Description>
      <Link to={`/perfil/${id}`}>
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </S.Content>
  </S.Card>
)

export default Restaurant
