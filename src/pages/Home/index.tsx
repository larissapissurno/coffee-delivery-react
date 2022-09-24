import {
  IntroItem,
  IntroItemList,
  StyledContent,
  StyledIntroBackground,
} from './styles'
import introCoffeeImg from '../../assets/images/intro-coffee.png'
import {
  StyledText,
  StyledTextSubtitle,
  StyledTitleL,
} from '../../styles/global'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <>
      <StyledIntroBackground>
        <StyledContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <StyledTextSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </StyledTextSubtitle>
            <IntroItemList>
              <IntroItem variant="primary-700">
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <StyledText>Compra simples e segura</StyledText>
              </IntroItem>

              <IntroItem variant="base-text">
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <StyledText>Embalagem mantém o café intacto</StyledText>
              </IntroItem>

              <IntroItem variant="primary-500">
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <StyledText>Entrega rápida e rastreada</StyledText>
              </IntroItem>

              <IntroItem variant="accent-500">
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <StyledText>O café chega fresquinho até você</StyledText>
              </IntroItem>
            </IntroItemList>
          </div>
          <img src={introCoffeeImg} alt="" />
        </StyledContent>
      </StyledIntroBackground>

      <StyledContent>
        <StyledTitleL>Nossos cafés</StyledTitleL>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </StyledContent>
    </>
  )
}
