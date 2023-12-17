import { useDispatch } from 'react-redux'
import Recipe from '../Recipe'
import { List, Container, Modal, ModalContent, Media } from './styles'
import fechar from '../../assets/images/fechar.svg'
import { useState } from 'react'
import { Cardapio, Restaurante } from '../../pages/Home'
import Button from '../Button'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  restaurant: Restaurante
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const RecipeList = ({ restaurant }: Props) => {
  const [modal, setModal] = useState<Cardapio | null>(null)

  const closeModal = () => {
    setModal(null)
  }

  const dispath = useDispatch()
  const addToCart = () => {
    if (modal) {
      dispath(add(modal))
      dispath(open())
      closeModal()
    }
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurant.cardapio.map((item) => (
              <Recipe
                key={item.id}
                title={item.nome}
                description={item.descricao}
                image={item.foto}
                onClick={() => {
                  setModal(item)
                }}
              />
            ))}
          </List>
        </div>
      </Container>
      <Modal className={modal ? 'visible' : ''}>
        <ModalContent>
          <header>
            <img src={fechar} alt="fechar aba" onClick={closeModal} />
          </header>
          <Media src={modal?.foto} alt={modal?.nome} />
          <div>
            <h4>{modal?.nome}</h4>
            <p>{modal?.descricao}</p>
            <p>Serve de {modal?.porcao}</p>
            <Button
              title="adicionar ao carrinho"
              width="220px"
              onclick={addToCart}
            >
              {`Adicionar ao carrinho - ${formataPreco(modal?.preco)}`}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default RecipeList
