import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import RecipeList from '../../components/RecipeList'

import { Restaurante } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRestaurante(resp))
  }, [id])

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
