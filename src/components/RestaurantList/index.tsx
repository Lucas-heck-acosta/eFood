import { Restaurante } from '../../pages/Home'
import { useGetRestaurantsQuery } from '../../services/api'
import Restaurant from '../Restaurant'
import { List, Container } from './styles'

const RestaurantList = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  const getTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    tags.push(restaurante.tipo)
    return tags
  }
  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurant) => (
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
