import { ShoppingCartSimple } from 'phosphor-react'
import {
  CardContent,
  CardFooter,
  ContentWrapper,
  Price,
  ShoppingCartButton,
  ShoppingSection,
  TagList,
} from './styles'
import { SelectQuantity } from '@components/SelectQuantity'
import { useState } from 'react'
import { Coffee } from 'src/reducers/coffees/reducer'

interface CoffeeCardProps {
  coffee: Coffee
}

const formattedCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(value)
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [totalValue, setTotalValue] = useState(formattedCurrency(coffee.price))

  const handleQuantityUpdate = (quantity: number) => {
    const minQuantityToCalculate = Math.max(quantity, 1)
    const calculatedPrice = coffee.price * minQuantityToCalculate
    setTotalValue(formattedCurrency(calculatedPrice))
  }

  return (
    <ContentWrapper>
      <CardContent>
        <img src={coffee.imageUrl} alt="" />

        <TagList>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </TagList>

        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
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
