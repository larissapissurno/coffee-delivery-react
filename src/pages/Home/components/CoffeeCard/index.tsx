import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { ContentWrapper, StyledCounter } from './styles'
import creamyEspressoImage from '@assets/coffees/mochaccino.png'

export function CoffeeCard() {
  return (
    <ContentWrapper>
      <img src={creamyEspressoImage} alt="" />
      <span>Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <small>O tradicional café feito com água quente e grãos moídos</small>

      <div>
        <span>R$</span>
        <span>9,90</span>
        <StyledCounter>
          <button>
            <Minus />
          </button>
          <span>1</span>
          <button>
            <Plus />
          </button>
        </StyledCounter>
        <button>
          <ShoppingCartSimple />
        </button>
      </div>
    </ContentWrapper>
  )
}
