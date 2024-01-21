import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import RecipeList from '../../components/RecipeList'
import { useGetRestaurantRecipesQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante, isLoading } = useGetRestaurantRecipesQuery(id!)

  if (!restaurante || isLoading) {
    return (
      <h3>
        <Loader />
      </h3>
    )
  }
  return (
    <>
      <Banner
        category={restaurante.tipo}
        title={restaurante.titulo}
        image={restaurante.capa}
        isLoading={isLoading}
      />
      <RecipeList restaurant={restaurante} isLoading={isLoading} />
    </>
  )
}

export default Perfil
