import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { FooterContainer, SocialMedias, SocialMedia, Paragraph } from './styles'
const Footer = () => (
  <FooterContainer>
    <div className="container"></div>
    <img src={logo} alt="eFood" />
    <SocialMedias>
      <SocialMedia>
        <img src={insta} alt="Instagram logo" />
      </SocialMedia>
      <SocialMedia>
        <img src={facebook} alt="Facebook logo" />
      </SocialMedia>
      <SocialMedia>
        <img src={twitter} alt="Twitter Logo" />
      </SocialMedia>
    </SocialMedias>
    <Paragraph>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Paragraph>
  </FooterContainer>
)

export default Footer
