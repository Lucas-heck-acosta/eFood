import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <S.FooterContainer>
    <div className="container"></div>
    <img src={logo} alt="eFood" />
    <S.SocialMedias>
      <S.SocialMedia>
        <img src={insta} alt="Instagram logo" />
      </S.SocialMedia>
      <S.SocialMedia>
        <img src={facebook} alt="Facebook logo" />
      </S.SocialMedia>
      <S.SocialMedia>
        <img src={twitter} alt="Twitter Logo" />
      </S.SocialMedia>
    </S.SocialMedias>
    <S.Paragraph>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Paragraph>
  </S.FooterContainer>
)

export default Footer
