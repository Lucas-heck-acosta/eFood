import Restaurant from '../Restaurant'
import { List, Container } from './styles'
import japones from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'
const RestaurantList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={japones}
          infos={['Destaque da semana', 'Japonesa']}
          rating={4.9}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={italiana}
          infos={['Japonesa']}
          rating={4.6}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={italiana}
          infos={['Japonesa']}
          rating={4.6}
        />
        <Restaurant
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={japones}
          infos={['Japonesa']}
          rating={4.9}
        />
        <Restaurant
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={japones}
          infos={['Japonesa']}
          rating={4.9}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={italiana}
          infos={['Japonesa']}
          rating={4.6}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantList
