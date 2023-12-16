import Recipe from '../Recipe'
import { Botao } from '../Recipe/styles'
import { List, Container, Modal, ModalContent, Media } from './styles'
import fechar from '../../assets/images/fechar.svg'
import { useState } from 'react'
import { Restaurante } from '../../pages/Home'

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
  const [modal, setModal] = useState({
    isVisible: false,
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      nome: '',
      descricao: '',
      preco: 0,
      porcao: ''
    })
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
                  setModal({
                    isVisible: true,
                    foto: item.foto,
                    nome: item.nome,
                    descricao: item.descricao,
                    preco: item.preco,
                    porcao: item.porcao
                  })
                }}
              />
            ))}
          </List>
        </div>
      </Container>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <header>
            <img src={fechar} alt="fechar aba" onClick={closeModal} />
          </header>
          <Media src={modal.foto} alt="" />
          <div>
            <h4>{modal.nome}</h4>
            <p>{modal.descricao}</p>
            <p>Serve de {modal.porcao}</p>
            <Botao>Adicionar ao carrinho - {formataPreco(modal.preco)}</Botao>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default RecipeList
