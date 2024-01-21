import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import * as S from './styles'
import Button from '../Button'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

type Props = {
  backToCart: () => void
  closeCart: () => void
  clearCart: (value: boolean) => void
  value: string
}
const CheckoutForm = ({ backToCart, closeCart, value, clearCart }: Props) => {
  const [showDelivery, setShowDelivery] = useState(true)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleShowDelivery = () => {
    setShowDelivery(!showDelivery)
  }
  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(10, 'O nome precisa ter pelo menos 10 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      cardName: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
      clearCart(true)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkContinue = () => {
    const requiredFields = ['name', 'address', 'city', 'number']

    return requiredFields.some((fieldName) => checkInputHasError(fieldName))
  }

  return (
    <div>
      {isSuccess && data ? (
        <>
          <S.CheckoutMessage>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.CheckoutMessage>
          <Button title="Concluir" onclick={closeCart}>
            Concluir
          </Button>
        </>
      ) : (
        <S.Form onSubmit={form.handleSubmit}>
          <div className={showDelivery ? '' : 'hidden'}>
            <h3>Entrega</h3>
            <div>
              <div>
                <label htmlFor="name">Quem irá receber</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('name') ? 'error' : ''}
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </div>
              <S.Row>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </div>
              </S.Row>
              <div>
                <label htmlFor="complement">Complemento (opicional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </div>
            </div>
            <div>
              <Button
                title="Continuar com o pagamento"
                onclick={handleShowDelivery}
                disabled={checkContinue()}
              >
                {checkContinue()
                  ? 'Preencha os campos obrigatórios'
                  : 'Continuar com o pagamento'}
              </Button>
              <Button title="Voltar para o carrinho" onclick={backToCart}>
                Voltar para o carrinho
              </Button>
            </div>
          </div>

          <div className={showDelivery ? 'hidden' : ''}>
            <h3>Pagamento - Valor a pagar {value}</h3>
            <div>
              <div>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </div>
              <S.Row>
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    id="cardCode"
                    type="text"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </div>
              </S.Row>
              <S.Row>
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    id="expiresMonth"
                    type="text"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    id="expiresYear"
                    type="text"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </div>
              </S.Row>
            </div>

            <div>
              <Button
                title="Finalizar pagamento"
                onclick={form.handleSubmit}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
              </Button>
              <Button
                title="Voltar para o carrinho"
                onclick={handleShowDelivery}
              >
                Voltar para o edição de endereço
              </Button>
            </div>
          </div>
        </S.Form>
      )}
    </div>
  )
}

export default CheckoutForm
