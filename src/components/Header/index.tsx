import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/banner.png'
import * as S from './styles'
import cart from '../../assets/images/carrinho.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

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
                    <Link to="/">
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
                    <Link to="/">Restaurantes</Link>
                  </S.LinkItem>

                  <S.LinkItem>
                    <Link to="/">
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
                <Link to="/">
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
