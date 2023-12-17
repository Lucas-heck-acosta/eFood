import { ButtonContainer } from './styles'

export type Props = {
  title: string
  onclick?: () => void
  children: string
  width?: string
}
const Button = ({ title, onclick, children, width = '100%' }: Props) => {
  return (
    <ButtonContainer
      type="button"
      title={title}
      onClick={onclick}
      style={{ width }}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
