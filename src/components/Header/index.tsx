import { useLocation, Link } from 'react-router-dom'

import * as S from './styles'
import { RootReducer } from '../../store'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import fundo from '../../assets/images/banner.png'
import cart from '../../assets/images/cart.png'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const dispath = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispath(open())
  }

  return (
    <>
      <S.DesktopHeader>
        <S.Image
          style={{
            backgroundImage: `url(${fundo})`,
            height: isHomePage ? '280px' : '140px'
          }}
        >
          <nav>
            <S.Links>
              {isHomePage ? (
                <>
                  <S.LinkItem>
                    <Link
                      to="/"
                      title="Clique aqui para voltar a página inicial."
                    >
                      <img src={logo} alt="eFood" />
                    </Link>
                    <S.Description>
                      Viva experiências gastronômicas
                      <br />
                      no conforto da sua casa
                    </S.Description>
                  </S.LinkItem>
                </>
              ) : (
                <>
                  <S.LinkItem>
                    <Link
                      to="/"
                      title="Clique aqui para ir a página de restaurantes."
                    >
                      Restaurantes
                    </Link>
                  </S.LinkItem>

                  <S.LinkItem>
                    <Link
                      to="/"
                      title="Clique aqui para voltar a página inicial."
                    >
                      <img src={logo} alt="eFood" />
                    </Link>
                  </S.LinkItem>
                  <S.LinkItem>
                    <a onClick={openCart}>
                      {items.length} produto(s) no carrinho
                    </a>
                  </S.LinkItem>
                </>
              )}
            </S.Links>
          </nav>
        </S.Image>
      </S.DesktopHeader>

      <S.MobileHeader>
        <S.Image
          style={{
            backgroundImage: `url(${fundo})`,
            height: '100px'
          }}
        >
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/" title="Clique aqui para voltar a página inicial.">
                  <img src={logo} alt="eFood" />
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <a onClick={openCart}>
                  <span>
                    {items.length} - <img src={cart} alt="Carrinho" />
                  </span>
                </a>
              </S.LinkItem>
            </S.Links>
          </nav>
        </S.Image>
      </S.MobileHeader>
    </>
  )
}

export default Header
