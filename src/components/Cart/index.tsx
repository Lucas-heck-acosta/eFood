import { CartContainer, Overlay, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { formataPreco } from '../RecipeList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

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

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor Total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <Button title="Continuar com a entrega" onclick={closeCart}>
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
