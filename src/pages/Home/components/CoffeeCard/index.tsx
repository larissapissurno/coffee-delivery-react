import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  CardContent,
  CardFooter,
  ContentWrapper,
  Price,
  ShoppingCartButton,
  ShoppingSection,
  StyledCounter,
} from './styles'
import creamyEspressoImage from '@assets/coffees/mochaccino.png'

export function CoffeeCard() {
  return (
    <ContentWrapper>
      <CardContent>
        <img src={creamyEspressoImage} alt="" />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardContent>

      <CardFooter>
        <Price>
          <span>R$</span>
          &nbsp;
          <h3>9,90</h3>
        </Price>

        <ShoppingSection>
          <StyledCounter>
            <button>
              <Minus weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus weight="bold" />
            </button>
          </StyledCounter>
          <ShoppingCartButton>
            <ShoppingCartSimple weight="fill" />
          </ShoppingCartButton>
        </ShoppingSection>
      </CardFooter>
    </ContentWrapper>
  )
}
