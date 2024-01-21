import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import Button from '../Button'
import { parseToBRL } from '../../utils'
import { RootReducer } from '../../store'
import CheckoutForm from '../CheckoutForm'
import { clear, close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCart, setShowCart] = useState(true)
  const [clearCart, setClearCart] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    goBackToCart()
    if (clearCart) {
      dispatch(clear())
    }
    setClearCart(false)
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
    if (items.length > 0) setShowCart(false)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            {showCart ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBRL(item.preco)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <p>Valor Total</p>
                  <p>{parseToBRL(getTotalPrice())}</p>
                </S.Prices>
                <Button
                  title="Continuar com a entrega"
                  onclick={continueDelivery}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <CheckoutForm
                backToCart={goBackToCart}
                clearCart={setClearCart}
                closeCart={closeCart}
                value={parseToBRL(getTotalPrice())}
              />
            )}
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um prato para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
