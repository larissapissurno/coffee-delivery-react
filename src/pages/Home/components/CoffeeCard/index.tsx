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
import React, { useState } from 'react'

interface Coffee {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  imageUrl: string
}

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
    const calculatedPrice = coffee.price * quantity
    setTotalValue(formattedCurrency(calculatedPrice))
  }

  return (
    <ContentWrapper>
      <CardContent>
        <img src={coffee.imageUrl} alt="" />

        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}

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
