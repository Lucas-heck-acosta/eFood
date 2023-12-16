import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import RecipeList from '../../components/RecipeList'
import { useGetRestaurantRecipesQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetRestaurantRecipesQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Banner
        category={restaurante.tipo}
        title={restaurante.titulo}
        image={restaurante.capa}
      />
      <RecipeList restaurant={restaurante} />
    </>
  )
}

export default Perfil
