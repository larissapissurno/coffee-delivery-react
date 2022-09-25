import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { ContentWrapper, StyledCounter } from './styles'

export function CoffeeCard() {
  return (
    <ContentWrapper>
      <img src="" alt="" />
      <span>Tradicional</span>
      <h5>Expresso Tradicional</h5>
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
