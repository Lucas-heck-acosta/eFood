import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/banner.png'
import { Image, LinkItem, Links, Description, HeaderContainer } from './styles'
const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <HeaderContainer>
      <Image
        style={{
          backgroundImage: `url(${fundo})`,
          height: isHomePage ? '280px' : '140px'
        }}
      >
        <nav>
          <Links>
            {isHomePage ? (
              <>
                <LinkItem>
                  <Link to="/">
                    <img src={logo} alt="eFood" />
                  </Link>
                  <Description>
                    Viva experiências gastronômicas
                    <br />
                    no conforto da sua casa
                  </Description>
                </LinkItem>
              </>
            ) : (
              <>
                <LinkItem>
                  <Link to="/">Restaurantes</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/">
                    <img src={logo} alt="eFood" />
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link to="">0 produto(s) no carrinho</Link>
                </LinkItem>
              </>
            )}
          </Links>
        </nav>
      </Image>
    </HeaderContainer>
  )
}

export default Header
