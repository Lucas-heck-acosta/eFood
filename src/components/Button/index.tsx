import { ButtonContainer } from './styles'

export type Props = {
  title: string
  onclick?: () => void
  children: string
  width?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}
const Button = ({
  title,
  onclick,
  children,
  width = '100%',
  type = 'button',
  disabled = false
}: Props) => {
  return (
    <ButtonContainer
      type={type}
      title={title}
      onClick={onclick}
      style={{ width }}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
