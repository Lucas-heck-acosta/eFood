import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List, Container } from './styles'

export type Props = {
  restaurants: Restaurante[]
}
const RestaurantList = ({ restaurants }: Props) => {
  const getTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    tags.push(restaurante.tipo)
    return tags
  }
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              description={restaurant.descricao}
              image={restaurant.capa}
              infos={getTags(restaurant)}
              rating={restaurant.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
