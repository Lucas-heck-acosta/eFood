import * as S from './styles'
import Button from '../Button'

type Props = {
  backToCart: () => void
  continueToPayment: () => void
}
const DeliveryForm = ({ backToCart, continueToPayment }: Props) => {
  return (
    <S.Form>
      <h3>Entrega</h3>
      <div>
        <div>
          <label htmlFor="name">Quem irá receber</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </div>
        <S.Row>
          <div>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="text" />
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input id="number" type="number" />
          </div>
        </S.Row>
        <div>
          <label htmlFor="number">Complemento (opicional)</label>
          <input id="number" type="text" />
        </div>
      </div>
      <Button title="Continuar com o pagamento" onclick={continueToPayment}>
        Continuar com o pagamento
      </Button>
      <Button title="Voltar para o carrinho" onclick={backToCart}>
        Voltar para o carrinho
      </Button>
    </S.Form>
  )
}

export default DeliveryForm
