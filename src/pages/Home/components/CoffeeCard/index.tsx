import { ShoppingCartSimple } from 'phosphor-react'
import {
  CardContent,
  CardFooter,
  ContentWrapper,
  Price,
  ShoppingCartButton,
  ShoppingSection,
} from './styles'
import creamyEspressoImage from '@assets/coffees/mochaccino.png'
import { SelectQuantity } from '@components/SelectQuantity'
import { useState } from 'react'

export function CoffeeCard() {
  const [totalValue, setTotalValue] = useState('9,90')
  const price = 9.9

  const handleQuantityUpdate = (quantity: number) => {
    const calculatedPrice = price * quantity
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
    }).format(calculatedPrice)
    setTotalValue(formattedPrice)
  }

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
          <h3>{totalValue}</h3>
        </Price>

        <ShoppingSection>
          <SelectQuantity onValueChange={handleQuantityUpdate} />

          <ShoppingCartButton>
            <ShoppingCartSimple weight="fill" />
          </ShoppingCartButton>
        </ShoppingSection>
      </CardFooter>
    </ContentWrapper>
  )
}
