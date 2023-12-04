import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/banner.png'
import { Image, Link, Links, Description, HeaderContainer } from './styles'
const Header = () => {
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
                <Link>
                  <a href="">
                    <img src={logo} alt="eFood" />
                  </a>
                  <Description>
                    Viva experiências gastronômicas
                    <br />
                    no conforto da sua casa
                  </Description>
                </Link>
              </>
            ) : (
              <>
                <Link>
                  <a href="">Restaurantes</a>
                </Link>
                <Link>
                  <a href="">
                    <img src={logo} alt="eFood" />
                  </a>
                </Link>
                <Link>
                  <a href="">0 produto(s) no carrinho</a>
                </Link>
              </>
            )}
          </Links>
        </nav>
      </Image>
    </HeaderContainer>
  )
}

export default Header
