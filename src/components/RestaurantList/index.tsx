import Restaurant from '../Restaurant'
import { List, Container } from './styles'

import RestaurantClass from '../../models/RestaurantClass'

export type Props = {
  restaurants: RestaurantClass[]
}
const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            rating={restaurant.rating}
            link={restaurant.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
