import RecipeClass from '../../models/RecipeClass'
import Recipe from '../Recipe'
import { List, Container } from './styles'

export type Props = {
  recipes: RecipeClass[]
}

const RecipeList = ({ recipes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RecipeList
