import Banner from '../../../components/Banner'
import RecipeList from '../../../components/RecipeList'
import RecipeClass from '../../../models/RecipeClass'

import sushi from '../../../assets/images/sushi.png'
import japonesa from '../../../assets/images/japonesa.png'

const recipeList: RecipeClass[] = [
  {
    id: 1,
    title: 'Barca Sushi',
    description: 'A clássica Barca Sushi: com 60 tipos de sua escolha!',
    image: sushi
  },
  {
    id: 2,
    title: 'Barca Sushi',
    description: 'A clássica Barca Sushi: com 60 tipos de sua escolha!',
    image: sushi
  },
  {
    id: 3,
    title: 'Barca Sushi',
    description: 'A clássica Barca Sushi: com 60 tipos de sua escolha!',
    image: sushi
  },
  {
    id: 4,
    title: 'Barca Sushi',
    description: 'A clássica Barca Sushi: com 60 tipos de sua escolha!',
    image: sushi
  },
  {
    id: 5,
    title: 'Barca Sushi',
    description: 'A clássica Barca Sushi: com 60 tipos de sua escolha!',
    image: sushi
  },
  {
    id: 6,
    title: 'Barca Sushi',
    description: 'A clássica Barca Sushi: com 60 tipos de sua escolha!',
    image: sushi
  }
]

const PerfilHioki = () => (
  <>
    <Banner category="Japonesa" title="Hioki Sushi" image={japonesa} />
    <RecipeList recipes={recipeList} />
  </>
)

export default PerfilHioki
