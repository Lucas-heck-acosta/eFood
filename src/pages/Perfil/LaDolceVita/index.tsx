import Banner from '../../../components/Banner'
import RecipeList from '../../../components/RecipeList'
import RecipeClass from '../../../models/RecipeClass'

import pizza from '../../../assets/images/pizza.png'
import italiana from '../../../assets/images/italiana.png'

const recipeList: RecipeClass[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  }
]

const PerfilLaDolce = () => (
  <>
    <Banner
      category="Italiana"
      title="La Dolce Vita Trattoria"
      image={italiana}
    />
    <RecipeList recipes={recipeList} />
  </>
)

export default PerfilLaDolce
