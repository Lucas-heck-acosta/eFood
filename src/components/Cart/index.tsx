import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, Sidebar, Prices, CartItem } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { formataPreco } from '../RecipeList'
import DeliveryForm from '../DeliveryForm'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCart, setShowCart] = useState(true)
  const [showDelivery, setShowDelivery] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const dispath = useDispatch()

  const closeCart = () => {
    dispath(close())
  }
  const removeItem = (id: number) => {
    dispath(remove(id))
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const goBackToCart = () => {
    setShowCart(true)
  }

  const continueDelivery = () => {
    setShowCart(false)
  }

  const continuePayment = () => {
    setShowPayment(true)
    setShowDelivery(false)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            {showCart ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{formataPreco(item.preco)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </CartItem>
                  ))}
                </ul>
                <Prices>
                  <p>Valor Total</p>
                  <p>{formataPreco(getTotalPrice())}</p>
                </Prices>
                <Button
                  title="Continuar com a entrega"
                  onclick={continueDelivery}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <DeliveryForm
                continueToPayment={continuePayment}
                backToCart={goBackToCart}
              />
            )}
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um prato para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
